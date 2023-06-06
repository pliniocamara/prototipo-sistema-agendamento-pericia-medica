const { v4 } = require('uuid');

let examinations = [];

class MedicalExaminationsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(examinations);
    });
  }

  findByUserId(userId) {
    return new Promise((resolve) => {
      resolve(examinations.filter((examination) => examination.userId === userId));
    });
  }  

  findById(id) {
    return new Promise((resolve) => {
      resolve(examinations.find((examination) => examination.id === id));
    });
  }

  create({ date, time, userId }) {
    return new Promise((resolve) => {
      const newExamination = {
        id: v4(),
        date,
        time,
        userId,
      };

      examinations.push(newExamination);
      resolve(newExamination);
    });
  }

  update(id, { date, time, userId }) {
    return new Promise((resolve) => {
      const updatedExamination = {
        id,
        date,
        time,
        userId,
      };

      examinations = examinations.map((examination) => (
        examination.id === id ? updatedExamination : examination
      ));

      resolve(updatedExamination);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      examinations = examinations.filter((examination) => examination.id !== id);
      resolve();
    });
  }
}

module.exports = new MedicalExaminationsRepository();