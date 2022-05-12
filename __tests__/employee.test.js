//variables to include jest and the employee.js file
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

//checks to see that the employees role returns the correct answer
test("check employee role", () => {
  const employee = new Employee("Blair", "1234", "email@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});

//checks to see if all other employee data returns correctly
test("Employee class", () => {
  const employee = new Employee("Blair", "1234", "email@gmail.com");
  expect(employee.name).toBe("Blair");
  expect(employee.id).toBe("1234");
  expect(employee.email).toBe("email@gmail.com");
});
