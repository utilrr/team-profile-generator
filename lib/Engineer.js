//variable to include the employee.js file
const Employee = require("./Employee");

//constructor function for engineer data that extends off of employee data
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Engineer";
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getGitHub() {
    return this.gitHub;
  }
}

//exporting the data for engineer
module.exports = Engineer;
