const { Users, Items, Carts, Orders } = require('../models');
const { sToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    Items: async () => {
      return await Items.find();
    },
    Item: async (parent, { _id }) => {
      return await Items.findById(_id);
    },
    ItemName: async (parent, { name }) => {
        return await Items.find(name);
      },
    users: async () => {
        return await Users.find();
      },
    user: async (parent, { _id }) => {
        return await Items.findById(_id);
    },
    Orders: async () => {
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
};

module.exports = resolvers;
