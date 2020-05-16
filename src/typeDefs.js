const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Query {
    songs: [Song!]!
  }

  type Song {
    id: ID!
    name: String!
  }

  type Mutation {
    createSong(name: String!): Song
  }
`;
