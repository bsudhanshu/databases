CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS 'messages';
DROP TABLE IF EXISTS 'username';
DROP TABLE IF EXISTS 'room';

CREATE TABLE messages (
  id int NOT NULL, 
  message_text NULL varchar(255),
  created_at NOT NULL date, 
  FOREIGN KEY (id_user) REFERENCES username(id),
  FOREIGN KEY (id_room) REFERENCES room(id),
  PRIMARY KEY (id)
);

CREATE TABLE username (
  id int NOT NULL, 
  name varchar(255),
  PRIMARY KEY (id)  
);

CREATE TABLE room (
  id int NOT NULL, 
  room_name varchar(255),
  PRIMARY KEY (id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

