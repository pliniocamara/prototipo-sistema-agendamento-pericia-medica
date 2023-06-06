const { v4 } = require('uuid');

let users = [
  {
    id: v4(),
    name: 'Plínio',
    email: 'plinio@mail.com',
  },
  {
    id: v4(),
    name: 'José',
    email: 'jose@mail.com',
  },
];

class UsersRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(users);
    });
  }

//   findById(id) {
//     return new Promise((resolve) => {
//       resolve(users.find((user) => user.id === id));
//     });
//   }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(users.find((user) => user.email === email));
    });
  }

  create({ name, email }) {
    return new Promise((resolve) => {
      const newUser = {
        id: v4(),
        name,
        email,
      };

      users.push(newUser);
      resolve(newUser);
    });
  }

//   delete(id) {
//     return new Promise((resolve) => {
//       users = users.filter((user) => user.id !== id);
//       resolve();
//     });
//   }
}

module.exports = new UsersRepository();