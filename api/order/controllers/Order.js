"use strict";
/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */
// note that this needs to be a "private" key from STRIPE
const stripe = require("stripe")(
  "sk_test_51JjDxpButqPmQhev89czTExArelky8bwP1AWP6kKgya6auMDE9n1cew2uzArwuMEItMyvVc3F3H2dsyNBvCnvdgF00hwHDeD6D"
);
module.exports = {
  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const { address, amount, dishes, token, city, state } = JSON.parse(
      ctx.request.body
    );
    const stripeAmount = Math.floor(amount * 100);
    // charge on stripe
    const charge = await stripe.charges.create({
      // Transform cents to dollars.
      amount: stripeAmount,
      currency: "usd",
      description: `Order ${new Date()} by ${ctx.state.user.id}`,
      source: token,
    });

    // Register the order in the database
    const order = await strapi.services.order.create({
      user: ctx.state.user.email,
      charge_id: charge.id,
      amount: stripeAmount,
      address,
      dishes: JSON.stringify(dishes),
      city,
      state,
    });

    return order;
  },
};
