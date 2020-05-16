const Song = require("./models/song");

exports.resolvers = {
  Query: {
    songs: () => Song.find()
  },
  Mutation: {
    createSong: async (_, { name }) => {
      const song = new Song({ name });
      await song.save();
      return song;
    }
  }
};
