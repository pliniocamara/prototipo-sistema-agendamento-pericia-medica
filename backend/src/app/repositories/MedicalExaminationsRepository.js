const db = require('../../database/database');
const { v4 } = require('uuid');

class MedicalExaminationsRepository {
  
  findAll() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM examinations`, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
  }

  findByUserId(userId) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM examinations WHERE userId = ?`, [userId], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
  }  

  findById(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM examinations WHERE id = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
  }

  create({ date, time, userId }) {
    return new Promise((resolve, reject) => {
      const id = v4();
      db.run(`INSERT INTO examinations (id, date, time, userId) VALUES (?, ?, ?, ?)`, [id, date, time, userId], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id, date, time, userId });
        }
      });
    });
  }

  update(id, { date, time, userId }) {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE examinations SET date = ?, time = ?, userId = ? WHERE id = ?`, [date, time, userId, id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id, date, time, userId });
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM examinations WHERE id = ?`, [id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

}

module.exports = new MedicalExaminationsRepository();