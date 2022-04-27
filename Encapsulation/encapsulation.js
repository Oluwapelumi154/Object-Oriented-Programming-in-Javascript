// Encapsulation
const employee = {
  baseSalary: 30_000,
  overTime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overTime * this.rate;
  },
};
const data = employee.getWage();
console.log(data);
