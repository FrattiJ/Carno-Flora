const { Users, Items, Carts, Orders } = require("../models");
const { sToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const { ObjectId } = require("mongodb");

const resolvers = {
  Query: {
    // Search for items by name or description
    searchItems: async (_, { query }, { db }) => {
      try {
        const items = await db
          .collection("items")
          .find({
            $or: [
              { name: { $regex: query, $options: "i" } },
              { description: { $regex: query, $options: "i" } },
            ],
          })
          .toArray();
        return items;
      } catch (error) {
        console.error("Error searching items:", error);
        throw new Error("Failed to search items");
      }
    },
    // Fetch all items
    items: async () => {
      return await Items.find();
    },
    // Fetch a single item by ID
    item: async (_, { _id }) => {
      return await Items.findById(_id);
    },
    // Fetch items by name - corrected method to find by name
    itemName: async (_, { name }) => {
      return await Items.findOne({ name });
    },
    // Fetch all users
    users: async () => {
      return await Users.find();
    },
    // Fetch a single user and populate orders
    user: async (_, { _id }) => {
      return await Users.findById(_id).populate("orders");
    },
    // Fetch all orders and populate carts
    orders: async () => {
      return await Orders.find().populate("carts");
    },
    // Fetch a specific order and deeply populate carts and items
    order: async (_, { _id }) => {
      const user = await Users.findById(_id).populate({
        path: "orders.carts",
        populate: "items",
      });

      return user;
    },
    // Fetch all carts and populate items
    carts: async () => {
      return await Carts.find().populate("items");
    },
    // Fetch a specific cart and populate items
    cart: async (_, { _id }) => {
      return await Users.findById(_id).populate("items");
    },
    // Process a checkout operation
    checkout: async (_, args, context) => {
      // Corrected the method to calculate total 
      console.log(args)
      const url = new URL(context.headers.referer).origin;
      await Carts.create({ items: args.Items.map(({ _id }) => _id) });
      const line_items = args.Items.map((Item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: Item.name,
            description: Item.description,
            images: [`${url}/images/${Item.image}`],
          },
          unit_amount: Item.price * 100,
        },
        quantity: Item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/paid?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    // Add a new user
    addUser: async (_, args) => {
      const user = await Users.create(args);
      const token = sToken(user);

      return { token, user };
    },
    // Add a new order
    addOrder: async (_, args) => {
      const order = await Orders.create(args);
      await Users.findByIdAndUpdate(args.userId, {
        $push: { orders: order._id },
      });

      return order;
    },
    // Add a cart for user
    addCart: async (_, { orderId, items }) => {
      const cart = await Carts.create({ items });
      await Orders.findByIdAndUpdate(orderId, {
        $push: { carts: cart._id },
      });
      return cart;
    },
    // Add an item to cart
    addToCart: async (_, { cartId, itemId }) => {
      const cart = await Carts.findById(cartId);
      if (!cart) throw new Error("Cart not found");

      const item = await Items.findById(itemId);
      if (!item) throw new Error("Item not found");

      cart.items.push(item._id);
      await cart.save();

      return cart;
    },
    // Remove an item from cart
    removeFromCart: async (_, { cartId, itemId }) => {
      const cart = await Carts.findById(cartId);
      if (!cart) throw new Error("Cart not found");

      const index = cart.items.indexOf(itemId);
      if (index > -1) {
        cart.items.splice(index, 1);
        await cart.save();
      } else {
        throw new Error("Item not found in cart");
      }

      return cart;
    },
    // Clear all items from cart
    clearCart: async (_, { cartId }) => {
      const cart = await Carts.findById(cartId);
      if (!cart) throw new Error("Cart not found");

      cart.items = [];
      await cart.save();

      return cart;
    },
    // User login
    login: async (_, { email, pW }) => {
      const user = await Users.findOne({ email });
      if (!user) throw new AuthenticationError("User not found");

      const isValidPassword = await user.isCorrectPassword(pW);
      if (!isValidPassword) throw new AuthenticationError("Invalid password");

      const token = sToken(user);

      return { token, user };
    },
    updateUser: async (parent, args) => {
      if (args._id) {
        return await Users.findByIdAndUpdate(args._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    deleteUser: async (parent, { _id }) => {
      return Users.findOneAndDelete({ _id });
    },
  },
};

module.exports = resolvers;
