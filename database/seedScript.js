const faker = require('faker');
const db = require('./index.js');

module.exports = () => {
  for (i = 0; i < 5; i++) {
    let user = `INSERT INTO users
            (display_name, personal_description, profile_image_url, offline_image_url)
            VALUES
            ('${faker.internet.userName()}',
            '${faker.random.words()}',
            '${faker.internet.avatar()}',
            '${faker.internet.avatar()}')`;
    let game = `INSERT INTO games
            (title, box_art_url)
            VALUES
            ('${faker.hacker.verb() + faker.hacker.noun()}',
            '${faker.random.image()}')`;
    let video = `INSERT INTO videos
            (title, video_description, url, thumbnail_url)
            VALUES
            ('${faker.hacker.ingverb() + faker.hacker.noun()}',
            '${faker.random.words()}',
            '${faker.internet.url()}',
            '${faker.random.image()}')`;
    let clip = `INSERT INTO clips
            (title, clip_description, url, thumbnail_url, duration)
            VALUES
            ('${faker.hacker.ingverb() + faker.hacker.adjective() + faker.hacker.noun()}',
            '${faker.random.words()}',
            '${faker.internet.url()}',
            '${faker.random.image()}',
            '${faker.random.number()}')`;
    db.connection.query(user);
    db.connection.query(game);
    db.connection.query(video);
    db.connection.query(clip);
  }
  db.connection.end();
  return 'database has been seeded';
};

require('make-runnable');

