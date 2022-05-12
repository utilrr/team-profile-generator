//constructor function for employee data
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Employee";
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}

//exporting the data for employee
module.exports = Employee;
