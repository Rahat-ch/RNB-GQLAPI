const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 the server is blasing off!`);
});
