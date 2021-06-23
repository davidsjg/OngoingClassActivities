-- Drops the moviePlanner\_db if it already exists --
DROP DATABASE IF EXISTS moviePlanner_db;

-- Create the database moviePlanner\_db and specified it for use.
CREATE DATABASE moviePlanner_db;

USE moviePlanner_db;

-- Create the table plans.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Better Off Dead);