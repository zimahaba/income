const express = require('express');
const { addSalary, getSalaries, getSalary, updateSalary } = require('../controllers/salaryController');

const router = express.Router()

router.get('/salary', getSalaries);
router.get('/salary/:id', getSalary);
router.post('/salary', addSalary);
router.patch('/salary/:id', updateSalary);

module.exports = router;
