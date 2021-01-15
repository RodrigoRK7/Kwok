const express = require("express");
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
app.use(express.json());

dotenv.config({ path: "./.env" });

const db = mysql.createPool({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (name != "") {
    db.query(
      "INSERT INTO users (name, username, email, password) VALUES (?,?,?,?)",
      [name, username, email, password],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("User created");
        }
      }
    );
  }
});
app.listen("3001", () => {
  console.log("running server");
});
