-- CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS username;
DROP TABLE IF EXISTS room;

CREATE TABLE username (
  id INT NOT NULL AUTO_INCREMENT, 
  name VARCHAR(255),
  PRIMARY KEY (id)  
);

CREATE TABLE room (
  id INT NOT NULL AUTO_INCREMENT, 
  room_name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT, 
  message_text VARCHAR(255) NULL,
  username VARCHAR(255) NULL,
  room_name VARCHAR(255),
  -- created_at DATE NOT NULL, 
  -- id_user INT NOT NULL,
  -- id_room INT NOT NULL,
  -- FOREIGN KEY (id_user) REFERENCES username(id),
  -- FOREIGN KEY (id_room) REFERENCES room(id),
  PRIMARY KEY (id)
);

-- INSERT INTO messages (message_text, username) VALUES ("In mercy's name, three days is all I need.","Valjean")


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

