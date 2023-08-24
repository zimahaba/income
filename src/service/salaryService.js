
const calculateSalary = (salary) => {
  const salaryBrl = (salary.salaryUsd * salary.conversionRate).toFixed(2);
  const spreadAmount = (salaryBrl * (salary.spreadFee/100)).toFixed(2);
  const salaryReceived = salaryBrl - spreadAmount;
  const simplesNacionalAmount = (salaryReceived * (salary.simplesNacionalFee/100)).toFixed(2);
  const proLabore = (salary.minimumWage * (salary.proLaboreFee/100)).toFixed(2);
  const accountantFee = (salary.minimumWage / 3).toFixed(2)
  const others = salary.others !== null && salary.others !== undefined ? salary.others : 0;
  const taxFreeSalary = (salaryReceived - simplesNacionalAmount - proLabore - accountantFee - others).toFixed(2);

  return {salaryBrl: salaryBrl, spreadAmount: spreadAmount, simplesNacionalAmount: simplesNacionalAmount, proLabore: proLabore, 
            accountantFee: accountantFee, others: others, taxFreeSalary: taxFreeSalary};
}

module.exports = { calculateSalary }