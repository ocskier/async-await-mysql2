DROP DATABASE IF EXISTS any_db;

CREATE DATABASE any_db;
USE any_db;

CREATE TABLE authors (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  city varchar(50),
  PRIMARY KEY (id)
);
