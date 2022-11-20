 create database if not exists easy_recipe;
 use easy_recipe;

drop table if exists Recipe;
drop table if exists User;



CREATE TABLE if not exists User(
 id int NOT NULL AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 password varchar(255) NOT NULL,
 user_type enum('USER', 'AUTHOR'),
 PRIMARY KEY (id)
);


CREATE TABLE if not exists Recipe(
id int NOT NULL AUTO_INCREMENT,
user_id int,
recipe_name varchar(255),
author_name varchar(255),
cook_time int,
total_time int,
date_published DATE DEFAULT (CURRENT_DATE),
description varchar(1000),
updated_time TIME  DEFAULT (CURRENT_TIME),
total_views int,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES User(id)
);


