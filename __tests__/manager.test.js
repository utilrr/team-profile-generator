//variables to include jest and the manager.js file
const { TestWatcher } = require("jest");
const Manager = require("../lib/Manager");

//checks to see that the managers role returns the correct answer
test("check manager role", () => {
  const manager = new Manager("Rick", "1234", "rick@email.com");
  expect(manager.getRole()).toBe("Manager");
});
//checks to see if all other manager data returns correctly
test("Manager class", () => {
  const manager = new Manager("Rick", "1234", "rick@email.com");
  expect(manager.name).toBe("Rick");
  expect(manager.id).toBe("1234");
  expect(manager.email).toBe("rick@email.com");
});
