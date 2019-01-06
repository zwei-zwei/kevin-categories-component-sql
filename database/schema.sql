CREATE DATABASE categories_module;

USE categories_module;

CREATE TABLE users (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  display_name VARCHAR(150) NOT NULL,
  personal_description VARCHAR(500),
  profile_image_url VARCHAR(1000) NOT NULL,
  offline_image_url VARCHAR(1000),
  view_count INT,
  PRIMARY KEY (id)
);

CREATE TABLE games (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  box_art_url VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE videos (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  video_description VARCHAR(500),
  url VARCHAR(1000) NOT NULL,
  thumbnail_url VARCHAR(1000) NOT NULL,
  view_count INT,
  PRIMARY KEY (id)
);

CREATE TABLE clips (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  clip_description VARCHAR(500),
  url VARCHAR(1000) NOT NULL,
  thumbnail_url VARCHAR(1000) NOT NULL,
  duration INT,
  view_count INT,
  PRIMARY KEY (id)
);


/*
N.B.
Execute this file from the command line by typing:
mysql -u root < database/schema.sql
to create the database and the tables.
*/