"use strict";
const { sanitizeEntity } = require("strapi-utils");

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  //get logged in users
 async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }
    const data = await strapi.services.events.find({ user: user.id });
   console.log(data);
    if (!data) {
      return ctx.notFound();
    }
    return sanitizeEntity(data, { model: strapi.models.events });
  },
  
};
