// database.js
const pgp = require('pg-promise')();
require('dotenv').config();

const dbConfig = {
  host: process.env.PGHOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

const db = pgp(dbConfig);

module.exports = db;
