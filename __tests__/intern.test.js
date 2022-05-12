//variables to include jest and the intern.js file
const { TestWatcher } = require("jest");
const Intern = require("../lib/Intern");

//checks to see that the interns role returns the correct answer
test("check intern role", () => {
  const intern = new Intern("BOB", "1234", "email@gmail.com");
  expect(intern.getRole()).toBe("Intern");
});

//checks to see if all other intern data returns correctly
test("Intern class", () => {
  const intern = new Intern("BOB", "1234", "email@gmail.com", "UNC");
  expect(intern.name).toBe("BOB");
  expect(intern.id).toBe("1234");
  expect(intern.email).toBe("email@gmail.com");
  expect(intern.school).toBe("UNC");
});
