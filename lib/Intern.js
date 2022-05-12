//variable to include the employee.js file
const Employee = require("./Employee");

//constructor function for intern data that extends off of employee data
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Intern";
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getSchool() {
    return this.school;
  }
}

//exporting the data for intern
module.exports = Intern;
