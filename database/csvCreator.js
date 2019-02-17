const faker = require('faker');
const fs = require('fs');
const path = require('path');
const os = require('os');

const csvFile = path.join(__dirname, 'videos.csv');
const output = [];

const genCsvData = () => {
  const entries = [];

  for (let i = 1; i < 100; i++) {
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
      entries.push(obj);
  }
    entries.forEach(entry => {
      const row = [];

      row.push(`"${entry.video_id}"`);
      row.push(`"${entry.user_name}"`);
      row.push(`"${entry.game_name}"`);
      row.push(`"${entry.game_box_art_url}"`);
      row.push(`"${entry.title}"`);
      row.push(`"${entry.description}"`);
      row.push(`"${entry.clipped_by}"`);
      row.push(`"${entry.url}"`);
      row.push(`"${entry.thumbnail_url_1}"`);
      row.push(`"${entry.thumbnail_url_2}"`);
      row.push(`"${entry.thumbnail_url_3}"`);
      row.push(`"${entry.thumbnail_url_4}"`);
      row.push(`"${entry.thumbnail_url_5}"`);
      row.push(`"${entry.user_url}"`);
      row.push(`"${entry.game_url}"`);
      row.push(`"${entry.duration}"`);
      row.push(`"${entry.view_count}"`);
      row.push(`"${entry.created_at}"`);
      output.push(row.join());
    });
}

genCsvData();

fs.writeFileSync(csvFile, output.join(os.EOL));

// after file creation, run appendFile to add additional entries to output file
// fs.appendFileSync(filename, output.join(os.EOL));

// JS memory heap issues
// node --max-old-space-size=12000 csvCreator.js