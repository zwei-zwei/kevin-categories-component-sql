CREATE DATABASE categories_module;

USE categories_module;

CREATE TABLE users (
  streamer_id INT unsigned NOT NULL AUTO_INCREMENT,
  display_name VARCHAR(100) NOT NULL,
  personal_description VARCHAR(500),
  profile_image_url VARCHAR(1000) NOT NULL,
  offline_image_url VARCHAR(1000),
  view_count INT,
  follower_count INT,
  PRIMARY KEY (streamer_id)
);

CREATE TABLE games (
  game_id INT unsigned NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  box_art_url VARCHAR(1000) NOT NULL,
  PRIMARY KEY (game_id)
);

CREATE TABLE videos (
  video_id INT unsigned NOT NULL AUTO_INCREMENT,
  video_title VARCHAR(150) NOT NULL,
  video_description VARCHAR(500),
  url VARCHAR(500) NOT NULL,
  thumbnail_url VARCHAR(500) NOT NULL,
  duration VARCHAR(9), /* 'HH:MM:SS[.fraction]' */
  view_count INT,
  created_at DATE, /* 'YYYY-MM-DD' */
  streamer_id INT unsigned NOT NULL,
  game_id INT unsigned NOT NULL,
  PRIMARY KEY (video_id),
  FOREIGN KEY (streamer_id) REFERENCES users(streamer_id) ON DELETE CASCADE,
  FOREIGN KEY (game_id) REFERENCES games(game_id) ON DELETE CASCADE
);

CREATE TABLE clips (
  clip_id INT unsigned NOT NULL AUTO_INCREMENT,
  clip_title VARCHAR(150) NOT NULL,
  clip_description VARCHAR(500),
  url VARCHAR(500) NOT NULL,
  thumbnail_url VARCHAR(500) NOT NULL,
  duration VARCHAR(9),
  view_count INT,
  created_at DATE,
  streamer_id INT unsigned NOT NULL,
  game_id INT unsigned NOT NULL,
  video_id INT unsigned NOT NULL,
  PRIMARY KEY (clip_id),
  FOREIGN KEY (streamer_id) REFERENCES users(streamer_id) ON DELETE CASCADE,
  FOREIGN KEY (game_id) REFERENCES games(game_id) ON DELETE CASCADE,
  FOREIGN KEY (video_id) REFERENCES videos(video_id) ON DELETE CASCADE
);


/*
N.B.
Execute this file from the command line by typing:
mysql -u root < database/schema.sql
to create the database and the tables.

Then, to view the db and tables,
login to mysql from command line by typing:
mysql -u root -p
*/