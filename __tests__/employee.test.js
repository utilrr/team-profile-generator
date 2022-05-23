//variables to include jest and the employee.js file
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

//checks to see that the employees role returns the correct answer
test("check employee role", () => {
  const employee = new Employee("Bob", "1234", "bob@email.com");
  expect(employee.getRole()).toBe("Employee");
});

//checks to see if all other employee data returns correctly
test("Employee class", () => {
  const employee = new Employee("Bob", "1234", "bob@email.com");
  expect(employee.name).toBe("Bob");
  expect(employee.id).toBe("1234");
  expect(employee.email).toBe("bob@email.com");
});
