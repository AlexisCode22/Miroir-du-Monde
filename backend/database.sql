CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT charset = utf8;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname varchar(20) NOT NULL,
  lastname varchar(20) NOT NULL,
  phone varchar(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT charset = utf8;

INSERT INTO 
user (id, firstname, lastname, phone, email, password)
VALUES (1, 'john', 'Doe', '0622334455', 'johndoe@gmail.com', 'password');

CREATE TABLE card (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre varchar(20) NOT NULL,
  description varchar(255) NOT NULL,
  lien varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT charset = utf8;

INSERT INTO
card (id, titre, description, lien)
VALUES (
  1, 
  'patate', 
  "cette photo est inspiré d'un combat sanglant entre deux protagoniste star du mma je cite Jon Jones et Daniel Cornier", 
  'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2016/07/jon-jones-daniel-cormier-ufc-182.jpg?w=1024&h=576&crop=1'
  );

