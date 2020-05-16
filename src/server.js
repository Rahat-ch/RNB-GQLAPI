const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");


const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 the server is blasing off!`);
});
