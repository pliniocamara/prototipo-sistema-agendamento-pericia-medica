const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// Criação da tabela users
db.run(`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`);

// Criação da tabela examinations
db.run(`CREATE TABLE IF NOT EXISTS examinations (
    id TEXT PRIMARY KEY,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    userId TEXT NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id)
)`);

module.exports = db;