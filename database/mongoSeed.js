const Videos = require('../database/index');
const faker = require('faker');

faker.locale = 'en_US';

const seedData = () => {

  for (let i = 0; i < 1000; i++) {
    Videos.create({
      video_id: faker.random.number(),
      user_name: faker.internet.userName(),
      game_name: faker.commerce.productName(),
      game_box_art_url: faker.image.imageUrl(),
      title: faker.lorem.words(),
      description: faker.lorem.sentences(),
      clipped_by: faker.internet.userName(),
      url: faker.internet.url(),
      thumbnail_url_1: faker.image.imageUrl(),
      thumbnail_url_2: faker.image.imageUrl(),
      thumbnail_url_3: faker.image.imageUrl(),
      thumbnail_url_4: faker.image.imageUrl(),
      thumbnail_url_5: faker.image.imageUrl(),
      user_url: faker.internet.url(),
      game_url: faker.internet.url(),
      duration: faker.random.number(),
      view_count: faker.random.number(),
      created_at: faker.date.recent(),
    })
    .catch(err => console.log(err));
  }
}

seedData();
