### Burger Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
	(
		id INT NOT NULL AUTO_INCREMENT,
		burger_name varchar(144) NOT NULL,
		devoured BOOLEAN NOT NULL,
		PRIMARY KEY (id)
	);

	SELECT * FROM burgers;