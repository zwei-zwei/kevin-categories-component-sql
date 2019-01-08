const faker = require('faker');
const db = require('./index.js');

module.exports = () => {
  const createUsersRow = new Promise(function (resolve, reject) {
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
        resolve(console.log('users tabled seeded'));
      }
    });
  });

  const createGamesRow = new Promise(function (resolve, reject) {
    for (i = 0; i < 50; i++) {
      let game = `INSERT INTO games
            (title,
            box_art_url)
            VALUES
            ('${faker.name.jobDescriptor()}',
            '${faker.random.image()}')`;
      if (i === 49) {
          db.connection.query(game, (err, res) => {
            if (err) {
              console.log(err);
            } else {
              resolve(console.log('games tabled seeded'));
            }
          });
      } else {
        db.connection.query(game, (err) => { if (err) { console.log(err) } });
      }
    }
  });

  const getUserIds = new Promise(function (resolve, reject) {
    db.connection.query(`SELECT streamer_id FROM users`, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        resolve(userIds = res);
      }
    });
  });

  const getGameIds = new Promise(function (resolve, reject) {
    db.connection.query(`SELECT game_id FROM games`, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        resolve(gameIds = res);
      }
    });
  });

  const createVideosRow = new Promise(function (resolve, reject) {
    db.connection.query('SELECT * FROM users', (err, res) => {
      if (err) {
        console.log(err);
      } else {
        db.connection.end();
        userIds = JSON.parse(JSON.stringify(userIds));
        gameIds = JSON.parse(JSON.stringify(gameIds));
        resolve(console.log(`USER IDS\n${userIds[0].streamer_id}\nGAME IDS\n${gameIds}`));
      }
    });
  });

  createUsersRow
    .then(result => createGamesRow)
    .then(result => getUserIds)
    .then(result => getGameIds)
    .then(result => createVideosRow);

  return 'database seed script called';
};

require('make-runnable');


// new Promise (function(resolve, reject) {
  //   let user = `INSERT INTO users
  //           (display_name,
  //           personal_description,
  //           profile_image_url,
  //           offline_image_url,
  //           view_count,
  //           follower_count)
  //           VALUES
  //           ('itzemario',
  //           'Italian plumber. Strong and brave and funny. Once known as Jumpman',
  //           'https://itunes.apple.com/us/app/super-mario-run/id1145275343?mt=8',
  //           'http://www.zero-friction.net/wp-content/uploads/2015/08/mario_sleeping_by_dominiquepucca-d5vq698.png.jpg',
  //           '${faker.random.number()}',
  //           '${faker.random.number()}')`;
  //   db.connection.query(user, (err, res) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       resolve('users tabled seeded');
  //     }
  //   });
  // }).then(function(result) {
  //   console.log(result);
  //   for (i = 0; i < 50; i++) {
  //     let game = `INSERT INTO games
  //           (title,
  //           box_art_url)
  //           VALUES
  //           ('${faker.name.jobDescriptor()}',
  //           '${faker.random.image()}')`;
  //     if (i === 49) {
  //       return new Promise (function(resolve, reject) {
  //         db.connection.query(game, (err, res) => {
  //           if (err) {
  //             console.log(err);
  //           } else {
  //             resolve('games tabled seeded');
  //           }
  //         });
  //       });
  //     } else {
  //       db.connection.query(game, (err) => {if (err) {console.log(err)}});
  //     }
  //   }
  // }).then(function(result) {
  //   console.log(result);
  //   return new Promise (function(resolve, reject) {
  //     db.connection.query(`SELECT streamer_id FROM users`, (err, res) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         resolve(JSON.parse(JSON.stringify(res)));
  //       }
  //     });
  //   });
  // }).then(function(result) {
  //   let streamerIDs = result;
  //   let idArray = [streamerIDs];
  //   return new Promise (function(resolve, reject) {
  //     db.connection.query(`SELECT game_id FROM games`, (err, res) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         let gameIDs = JSON.parse(JSON.stringify(res))
  //         idArray.push(gameIDs);
  //         resolve(idArray);
  //       }
  //     });
  //   });
  // }).then(function(result) {
  //   db.connection.end();
  //   console.log(result);
  // });
///////////////////////////////////////////

// module.exports = () => {
//   for (i = 0; i < 5; i++) {
//     let user = `INSERT INTO users
//             (display_name,
//             personal_description,
//             profile_image_url,
//             offline_image_url,
//             view_count,
//             follower_count)
//             VALUES
//             ('itzemario',
//             'Italian plumber. Strong and brave and funny. Once known as Jumpman',
//             'https://itunes.apple.com/us/app/super-mario-run/id1145275343?mt=8',
//             'http://www.zero-friction.net/wp-content/uploads/2015/08/mario_sleeping_by_dominiquepucca-d5vq698.png.jpg',
//             '${faker.random.number()}',
//             '${faker.random.number()}')`;
//     let game = `INSERT INTO games
//             (title,
//             box_art_url)
//             VALUES
//             ('${faker.name.jobDescriptor()}',
//             '${faker.random.image()}')`;
//     let video = `INSERT INTO videos
//             (video_title,
//             video_description,
//             url,
//             thumbnail_url,
//             duration,
//             view_count,
//             created_at)
//             VALUES
//             ('${faker.hacker.verb()/* video_title */}',
//             '${faker.lorem.sentence()/* video_description */}',
//             '${faker.internet.url()/* url */}',
//             '${faker.random.image()/* thumbnail_url */}',
//             '${faker.date.recent().substring(11, 19)/* duration */}:',
//             '${faker.random.number()/* view_count */}',
//             '${faker.date.recent().substring(0, 10)/* created_at */}')`;
//     let clip = `INSERT INTO clips
//             (clip_title,
//             clip_description,
//             url,
//             thumbnail_url,
//             duration,
//             view_count,
//             created_at)
//             VALUES
//             ('${faker.hacker.ingverb()/* clip_title */}',
//             '${faker.lorem.sentence()/* clip_description */}',
//             '${faker.internet.url()/* url */}',
//             '${faker.random.image()/* thumbnail_url */}',
//             '${faker.date.recent().substring(11, 19)/* duration */}:',
//             '${faker.random.number()/* view_count */}',
//             '${faker.date.recent().substring(0, 10)/* created_at */}')`;

//     if (i === 0) { db.connection.query(user); }
//     db.connection.query(game);
//     db.connection.query(video);
//     db.connection.query(clip);
//   }
//   db.connection.end();
//   return 'database has been seeded';
// };