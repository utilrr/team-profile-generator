//variable to include the employee.js file
const Employee = require("./Employee");

//constructor function for manager data that extends off of employee data
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Manager";
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

//exporting the data for manager
module.exports = Manager;
