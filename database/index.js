const mongoose = require('mongoose');
const onlineDb = require('../config/keys');

mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const videosSchema = mongoose.Schema({
  video_id: Number,
  user_name: String,
  game_name: String,
  game_box_art_url: String,
  title: String,
  description: String,
  clipped_by: String,
  url: String,
  thumbnail_url_1: String,
  thumbnail_url_2: String,
  thumbnail_url_3: String,
  thumbnail_url_4: String,
  thumbnail_url_5: String,
  user_url: String,
  game_url: String,
  duration: Number,
  view_count: Number,
  created_at: {
    type: Date,
    default: Date.now
  },
});

const Videos = mongoose.model('Videos', videosSchema);

module.exports = db;
module.exports = Videos;