const Salary = require('../models/salary');
const { calculateSalary } = require('../service/salaryService');

const addSalary = async (req, res) => {

  const calculatedSalary = calculateSalary(req.body);
  const salary = new Salary(req.body);
  salary.salaryBrl = calculatedSalary.salaryBrl;
  salary.spreadAmount = calculatedSalary.spreadAmount;
  salary.iofDeducted = 0;
  salary.simplesNacional = calculatedSalary.simplesNacionalAmount;
  salary.proLabore = calculatedSalary.proLabore;
  salary.accountantFee = calculatedSalary.accountantFee;
  salary.taxFreeSalary = calculatedSalary.taxFreeSalary;
  salary.others = calculatedSalary.others;
  salary.received = null;
  salary.converted = null;
  salary.transfered = null;
  salary.taxInvoiceIssued = null;
  salary.taxInvoiceDueDate = null;
  salary.iofFee = null;

  await salary.save();

  res.status(201).send({id: salary._id});
}

const RECALCULATE_FIELDS = ['salaryUsd', 'conversionRate', 'spreadFee', 'simplesNacionalFee', 'minimumWage', 'proLaboreFee', 'others'];

const updateSalary = async (req, res) => {

  const property =  Object.keys(req.body)[0];
  const value =  req.body[property];
  
  const salary = await Salary.findById(req.params.id);
  let copiedSalary = salary.toObject();
  copiedSalary[property] = value;
  
  let update = req.body;

  if (RECALCULATE_FIELDS.includes(property)) {
    update = calculateSalary(copiedSalary);
    update[property] = value;
  }
  
  await Salary.findByIdAndUpdate(req.params.id, update);
  
  res.status(200).send();
}

const getSalaries = async (req, res) => {
  const salaries = await Salary.find();
  res.status(200).json(salaries);
}

const getSalary = async (req, res) => {
  const salary = await Salary.findById(req.params.id);
  res.status(200).json(salary);
}

module.exports = {
  addSalary, getSalaries, updateSalary, getSalary
}