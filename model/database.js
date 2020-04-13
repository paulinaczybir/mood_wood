require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "mood_wood",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = [
    "DROP TABLE if exists log; ",
    "DROP TABLE if exists mood; ",
    "DROP TABLE if exists kid; ",
    "DROP TABLE if exists parent; " ,
    "CREATE TABLE mood (Id int primary key, emotion text null) ;",
    "CREATE TABLE parent (id int auto_increment, lastname text null, firstname text not null, email text null, username varchar(25) not null, password varchar(25) not null, " +
      "constraint parent_Id_uindex unique (id), " +
      "constraint parent_UserName_uindex unique (username)); ",
    "ALTER TABLE parent add primary key (id); ",
    "CREATE TABLE kid (Id int auto_increment primary key, Parent_Id int null, FirstName tinytext null, parent_username int null, " +
      "constraint kid_Parent_Id_uindex unique (Parent_Id), " +
      "constraint kid_parent__fk foreign key (Parent_Id) references parent (id) on update cascade on delete cascade); ",
    "CREATE TABLE log (Id int auto_increment primary key, Kid_Id int null, MoodId int null, Text text null, Date date null, " + 
      "constraint log_kid__fk foreign key (Kid_Id) references kid (Id) on update cascade on delete cascade, " +
      "constraint log_mood__fk foreign key (MoodId) references mood (Id) on update cascade on delete cascade);" +
    "INSERT INTO mood (id, emotion) VALUES (1, 'angry');" +
    "INSERT INTO mood (id, emotion) VALUES (2, 'confused');" +
    "INSERT INTO mood (id, emotion) VALUES (3, 'good');" +
    "INSERT INTO mood (id, emotion) VALUES (4, 'happy');" +
    "INSERT INTO mood (id, emotion) VALUES (5, 'proud');" +
    "INSERT INTO mood (id, emotion) VALUES (6, 'sad');" +
    "INSERT INTO mood (id, emotion) VALUES (7, 'silly');" +
    "INSERT INTO mood (id, emotion) VALUES (8, 'shy');" +
    "INSERT INTO mood (id, emotion) VALUES (9, 'tired');" 
  ];

  sql.forEach(e => { 
    con.query(e, function(err, result) {
      if (err) throw err;
      console.log("Tables creation was successful!"); 
    });
  });
  console.log("Closing...");
  con.end();
});