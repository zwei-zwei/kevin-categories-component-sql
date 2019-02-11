const { postGresURI, postGresDB, postGresUser, postGresPassWord } = require('../config/keys');

const knex =  require('knex')({
  client: 'pg',
  version: '7.8',
  connection: {
    host: postGresURI,
    user: postGresUser,
    password: postGresPassWord,
    database: postGresDB
  }
});

knex.schema.hasTable('video2').then((exists) => {
  if (!exists) {
    return knex.schema.createTable('video2', (table) => {
      table.increments('video_id').primary();
      table.string('user_name');
      table.string('game_name');
      table.string('game_box_art_url');
      table.string('title');
      table.string('description', 500);
      table.string('clipped_by');
      table.string('url');
      table.string('thumbnail_url_1');
      table.string('thumbnail_url_2');
      table.string('thumbnail_url_3');
      table.string('thumbnail_url_4');
      table.string('thumbnail_url_5');
      table.string('user_url');
      table.string('game_url');
      table.integer('duration');
      table.integer('view_count');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  } else {
    console.log('Already exists!!');
  }
});

