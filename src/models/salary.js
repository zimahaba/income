const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  institution: {type: String},
  month: {type: String, required: true},
  salaryUsd: {type: Number, required: true},
  conversionRate: {type: Number, required: true},
  salaryBrl: {type: Number, required: true},
  spreadAmount: {type: Number, required: true},
  iofDeducted: {type: Number},
  simplesNacional: {type: Number, required: true},
  proLabore: {type: Number, required: true},
  accountantFee: {type: Number, required: true},
  taxFreeSalary: {type: Number, required: true},
  others: {type: Number},
  received: {type: Date},
  converted: {type: Date},
  transfered: {type: Date},
  taxInvoiceIssued: {type: Date},
  taxInvoiceDueDate: {type: Date},
  spreadFee: {type: Number, required: true},
  iofFee: {type: Number},
  simplesNacionalFee: {type: Number},
  proLaboreFee: {type: Number},
  minimumWage: {type: Number},
  paidAccountantFee: {type: Boolean, required: true, default: false},
  paidSimplesNacional: {type: Boolean, required: true, default: false},
  paidRetirementFee: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('salary', salarySchema);