const mongoose = require("mongoose");

const Song = mongoose.model("Song", { name: String });

module.exports = Song;
