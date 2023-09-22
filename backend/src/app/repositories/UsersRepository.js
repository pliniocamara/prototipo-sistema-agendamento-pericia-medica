const db = require('../../database/database');
const { v4 } = require('uuid');

// let users = [
//   {
//     id: v4(),
//     name: 'Plínio',
//     email: 'plinio@mail.com',
//   },
//   {
//     id: v4(),
//     name: 'José',
//     email: 'jose@mail.com',
//   },
// ];

class UsersRepository {
  findAll() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM users`, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
  } 

  findByEmail(email) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
  }

  create({ name, email }) {
    return new Promise((resolve, reject) => {
      const id = v4();
      db.run(`INSERT INTO users (id, name, email) VALUES (?, ?, ?)`, [id, name, email], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id, name, email});
        }
      });
    });
  }
  
}

module.exports = new UsersRepository();