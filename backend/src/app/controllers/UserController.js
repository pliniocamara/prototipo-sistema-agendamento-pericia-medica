const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(req, res) {
    const users = await UsersRepository.findAll();

    res.json(users);
  }

  async store(req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const userExists = await UsersRepository.findByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: 'This email is already in use' });
    }

    const user = await UsersRepository.create({ name, email });

    res.json(user);
  }

  async login(req, res) {
    const { email } = req.body;

    const user = await UsersRepository.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json(user);
  }
}

module.exports = new UserController();
