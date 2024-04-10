const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio & Blog REST API for pranjalgoyal.dev",
      version: "1.0.0",
      description: "A simple Express API for",
    },
  },
  apis: [`${__dirname}/routes/*.js`], // path to your API files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
