const MedicalExaminationsRepository = require('../repositories/MedicalExaminationsRepository');

class MedicalExaminationController {
  async index(req, res) {
    const examinations = await MedicalExaminationsRepository.findAll();

    res.json(examinations);
  }

  async findByUserId(req, res) {
    const { userId } = req.params;
  
    const examinations = await MedicalExaminationsRepository.findByUserId(userId);
  
    res.json(examinations);
  }  

  async show(req, res) {
    const { id } = req.params;

    const examination = await MedicalExaminationsRepository.findById(id);

    if (!examination) {
      return res.status(404).json({ error: 'Examination not found' });
    }

    res.json(examination);
  }

  async store(req, res) {
    const { date, time, userId } = req.body;

    if (!date || !time || !userId) {
      return res.status(400).json({ error: 'Date, time and user ID are required' });
    }

    const examination = await MedicalExaminationsRepository.create({
      date, time, userId,
    });

    res.json(examination);
  }

  async update(req, res) {
    const { id } = req.params;
    const { date, time, userId } = req.body;

    const examinationExists = await MedicalExaminationsRepository.findById(id);
    if (!examinationExists) {
      return res.status(404).json({ error: 'Examination not found' });
    }

    const examination = await MedicalExaminationsRepository.update(id, {
      date, time, userId,
    });

    res.json(examination);
  }

  async delete(req, res) {
    const { id } = req.params;

    const examination = await MedicalExaminationsRepository.findById(id);

    if (!examination) {
      return res.status(404).json({ error: 'Examination not found' });
    }

    await MedicalExaminationsRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new MedicalExaminationController();