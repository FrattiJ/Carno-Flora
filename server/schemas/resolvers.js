const { Users, Items, Carts, Orders } = require('../models');
const { sToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { ObjectId } = require('mongodb');

const resolvers = {
  Query: {
    searchItems: async (_, { query }, { db }) => {
      try {
        const items = await db.collection('items').find({
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
          ]
        }).toArray();
        return items;
      } catch (error) {
        console.error('Error searching items:', error);
        throw new Error('Failed to search items');
      }
    },
    items: async () => {
      return await Items.find();
    },
    item: async (parent, { _id }) => {
      return await Items.findById(_id);
    },
    itemName: async (parent, { name }) => {
        return await Items.find(name);
      },
    users: async () => {
        return await Users.find();
      },
    user: async (parent, { _id }) => {
        return await Items.findById(_id).populate('orders');
    },
    orders: async () => {
        return await Orders.find.populate('carts');
      },
    order: async (parent, { _id }) => {
        const user = await Users.findById(_id).populate({
          path: 'orders.carts',
          populate: 'items',
        });

        return user;
      },
      carts: async () => {
        return await Carts.find.populate('items');
      },
    cart: async (parent, { _id }) => {
        return await Users.findById(_id).populate('items');
      },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      await Carts.create({ items: args.items.map(({ _id }) => _id) });
      const total = [];

      for (const Items of args.items) {
        total.push({
          price_data: {
            currency: 'usd',
            item_data: {
              name: Items.name,
              description: Items.description,
              images: [`${url}/images/${Items.image}`],
            },
            unit_amount: Items.price * 100,
          },
          quantity: Items.purchaseQuantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        total,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await Users.create(args);
      const token = sToken(user);

      return { token, user };
    },
    addOrder: async (parent, args) => {
        const order = new Orders({ args });

        await Users.findByIdAndUpdate(args._id, {
          $push: { orders: order },
        });

        return order;
      },
    addCart: async (parent, { _id, items }) => {
        const cart = new Carts({ items });

        await Users.findByIdAndUpdate(_id, {
          $push: { carts: cart },
        });

        return cart;
    },
    login: async (parent, { email, pW }) => {
      const user = await Users.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const Pass = await user.isCorrectPassword(pW);

      if (!Pass) {
        throw AuthenticationError;
      }

      const token = sToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;
