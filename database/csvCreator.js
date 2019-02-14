const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');

const filename = path.join(__dirname, 'output.csv');
const output = [];

function seedData() {
  let data = [];
  for (let i = 1; i < 2000000; i++) {
    // iterations work 2m at time
    let obj = {
      video_id: i,
      user_name: faker.internet.userName(),
      game_name: faker.commerce.productName(),
      game_box_art_url: faker.image.imageUrl(),
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
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
    }
    data.push(obj);
  }
    data.forEach(d => {
      const row = [];

        row.push(`"${d.video_id}"`);
        row.push(`"${d.user_name}"`);
        row.push(`"${d.game_name}"`);
        row.push(`"${d.game_box_art_url}"`);
        row.push(`"${d.title}"`);
        row.push(`"${d.description}"`);
        row.push(`"${d.clipped_by}"`);
        row.push(`"${d.url}"`);
        row.push(`"${d.thumbnail_url_1}"`);
        row.push(`"${d.thumbnail_url_2}"`);
        row.push(`"${d.thumbnail_url_3}"`);
        row.push(`"${d.thumbnail_url_4}"`);
        row.push(`"${d.thumbnail_url_5}"`);
        row.push(`"${d.user_url}"`);
        row.push(`"${d.game_url}"`);
        row.push(`"${d.duration}"`);
        row.push(`"${d.view_count}"`);
        row.push(`"${d.created_at}"`);
        output.push(row.join());
    });
}

seedData();

fs.writeFileSync(filename, output.join(os.EOL)); // after file creation

// run appendFile to add to output file
// fs.appendFileSync(filename, output.join(os.EOL));

// JS memory heap issues
// node --max-old-space-size=12000 csvCreator.js