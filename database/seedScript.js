const faker = require('faker');
const db = require('./index.js');

module.exports = () => {
  new Promise(function (resolve, reject) {
    let user = `INSERT INTO users
            (display_name,
            personal_description,
            profile_image_url,
            offline_image_url,
            view_count,
            follower_count)
            VALUES
            ('itzemario',
            'Italian plumber. Strong and brave and funny. Once known as Jumpman',
            'https://itunes.apple.com/us/app/super-mario-run/id1145275343?mt=8',
            'http://www.zero-friction.net/wp-content/uploads/2015/08/mario_sleeping_by_dominiquepucca-d5vq698.png.jpg',
            '${faker.random.number()}',
            '${faker.random.number()}')`;
    db.connection.query(user, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        resolve('users table seeded');
      }
    });
  }).then(function (result) {
    console.log(result);
    for (i = 0; i < 100; i++) {
      let game = `INSERT INTO games
            (title,
            box_art_url)
            VALUES
            ('${faker.name.jobDescriptor()}',
            '${faker.random.image()}')`;
      if (i === 99) {
        return new Promise(function (resolve, reject) {
          db.connection.query(game, (err, res) => {
            if (err) {
              console.log(err);
            } else {
              resolve('games table seeded');
            }
          });
        });
      } else {
        db.connection.query(game, (err) => { if (err) { console.log(err) } });
      }
    }
  }).then(function (result) {
    console.log(result);
    return new Promise(function (resolve, reject) {
      db.connection.query(`SELECT streamer_id FROM users`, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          resolve(JSON.parse(JSON.stringify(res)));
        }
      });
    });
  }).then(function (result) {
    let streamerIds = result;
    let ids = {};
    ids.users = streamerIds;
    return new Promise(function (resolve, reject) {
      db.connection.query(`SELECT game_id FROM games`, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          let gameIds = JSON.parse(JSON.stringify(res))
          ids.games = gameIds;
          resolve(ids);
        }
      });
    });
  }).then(function (result) {
    return new Promise(function (resolve, reject) {
      for (i = 0; i < result.games.length; i++) {
        let video = `INSERT INTO videos
                (user_name,
                game_name,
                game_box_art_url,
                video_title,
                video_description,
                url,
                thumbnail_url,
                duration,
                view_count,
                created_at,
                streamer_id,
                game_id)
                VALUES
                ('${faker.internet.userName()/* user_name */}',
                  '${faker.hacker.verb() + ' ' + faker.hacker.noun()/* game_name */}',
                  '${faker.random.image()/* game_box_art_url */}',
                  '${faker.random.word() + ' ' + faker.random.word()/* video_title */}',
                  '${faker.lorem.sentence()/* video_description */}',
                  '${faker.internet.url()/* url */}',
                  '${faker.random.image()/* thumbnail_url */}',
                  '${JSON.stringify(faker.date.recent()).substring(12, 20)/* duration */}',
                  '${faker.random.number()/* view_count */}',
                  '${Math.floor((Math.random() * 101) + 1)/* created_at */}',
                  '${result.users[0].streamer_id/* streamer_id */}',
                  '${result.games[i].game_id/* game_id */}')`;
        if (i === result.games.length - 1) {
          db.connection.query(video, (err, res) => {
            if (err) {
              console.log(err);
            } else {
              resolve(result);
            }
          });
        } else {
          db.connection.query(video);
        }
      };

    })
  }).then(function (result) {
    console.log('videos table seeded');
    return new Promise(function (resolve, reject) {
      db.connection.query(`SELECT video_id FROM videos`, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          let videoIds = JSON.parse(JSON.stringify(res))
          result.videos = videoIds;
          resolve(result);
        }
      });
    });
  }).then(function (result) {
    return new Promise(function(resolve, reject){
      for (i = 0; i < result.games.length; i++) {
        let clip = `INSERT INTO clips
            (user_name,
            game_name,
            game_box_art_url,
            clip_title,
            clip_description,
            url,
            thumbnail_url,
            duration,
            view_count,
            created_at,
            streamer_id,
            game_id,
            video_id)
            VALUES
            ('${faker.internet.userName()/* user_name */}',
              '${faker.hacker.verb() + ' ' + faker.hacker.noun()/* game_name */}',
              '${faker.random.image()/* game_box_art_url */}',
              '${faker.random.word()/* clip_title */}',
              '${faker.lorem.sentence()/* clip_description */}',
              '${faker.internet.url()/* url */}',
              '${faker.random.image()/* thumbnail_url */}',
              '${JSON.stringify(faker.date.recent()).substring(12, 20)/* duration */}',
              '${faker.random.number()/* view_count */}',
              '${Math.floor((Math.random() * 101) + 1)/* created_at */}',
              '${result.users[0].streamer_id/* streamer_id */}',
              '${result.games[i].game_id/* game_id */}',
              '${result.videos[i].video_id/* video_id */}')`;
        if (i === result.games.length - 1) {
          db.connection.query(clip, (err, res) => {
            if (err) {
              console.log(err);
            } else {
              resolve(console.log('clips table seeded'));
            }
          });
        } else {
          db.connection.query(clip);
        }
      };
    });
  }).then(result => db.connection.end());
  return 'seed script called';
};

require('make-runnable');