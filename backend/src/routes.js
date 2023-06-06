const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const MedicalExaminationController = require('./app/controllers/MedicalExaminationController');

const router = Router();

// Rotas para usuários
router.get('/usuarios', UserController.index); // Listar usuários
router.post('/usuarios', UserController.store); // Registro de usuário
router.post('/usuarios/login', UserController.login); // Login do usuário

// Rotas para perícias médicas
router.get('/pericias', MedicalExaminationController.index); // Listar todas as perícias
router.get('/pericias/:userId', MedicalExaminationController.findByUserId); // Listar todas as perícias
router.get('/pericias/:id', MedicalExaminationController.show); // Mostrar detalhes de uma perícia
router.post('/pericias', MedicalExaminationController.store); // Agendar uma nova perícia
router.put('/pericias/:id', MedicalExaminationController.update); // Atualizar uma perícia
router.delete('/pericias/:id', MedicalExaminationController.delete); // Cancelar uma perícia

module.exports = router;
