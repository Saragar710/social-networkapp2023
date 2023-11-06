DROP DATABASE IF EXISTS social_network;
CREATE DATABASE  social_network;

USE social_network;

CREATE TABLE thoughts(
       id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(280) UNIQUE NOT NULL
);



