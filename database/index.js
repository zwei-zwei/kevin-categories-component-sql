const Sequelize = require('sequelize');

const sequelize = new Sequelize('twitch', 'kevinphung', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Video = sequelize.define('videos', {
  video_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  user_name: {
    type: Sequelize.STRING
  },
  game_name: {
    type: Sequelize.STRING
  },
  game_box_art_url: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  clipped_by: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  thumbnail_url_1: {
    type: Sequelize.STRING
  },
  thumbnail_url_2: {
    type: Sequelize.STRING
  },
  thumbnail_url_3: {
    type: Sequelize.STRING
  },
  thumbnail_url_4: {
    type: Sequelize.STRING
  },
  thumbnail_url_5: {
    type: Sequelize.STRING
  },
  user_url: {
    type: Sequelize.STRING
  },
  game_url: {
    type: Sequelize.STRING
  },
  duration: {
    type: Sequelize.INTEGER
  },
  view_count: {
    type: Sequelize.INTEGER
  },
  created_at: {
    type: Sequelize.DATE
  },
});

// Video.sync({
//   alter: true
// })
// .then((err) => {
//   if(err) {
//     console.log('An error occur while creating table');
//   } else {
//     console.log('Item table created successfully');
//   }
// });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
module.exports = Video;