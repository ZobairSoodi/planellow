DROP IF EXISTS DATABASE planello;
CREATE DATABASE planello;
use planello;

CREATE TABLE user(
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    fullname VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE state(
    id_state INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(25)
);

CREATE TABLE tasks(
    id_task INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(25),
    description VARCHAR(255),
    id_user INT,
    FOREIGN KEY id_user REFERENCES user(id_user)
    id_state INT,
    FOREIGN KEY id_state REFERENCES state(id_state)
);