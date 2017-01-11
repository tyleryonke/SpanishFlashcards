CREATE database flashcardapp_db;

USE flashcardapp_db;

CREATE table cards (
  id INT AUTO_INCREMENT NOT NULL,
  input_word VARCHAR(250) NOT NULL,
  owned_user VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);