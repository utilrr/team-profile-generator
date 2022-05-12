//variables to include jest and the engineer.js file
const { TestWatcher } = require("jest");
const Engineer = require("../lib/Engineer");

//checks to see that the engineers role returns the correct answer
test("check engineer role", () => {
  const engineer = new Engineer("BOB", "1234", "email@gmail.com", "dogmom3");
  expect(engineer.getRole()).toBe("Engineer");
});

//checks to see if all other engineer data returns correctly
test("engineer class", () => {
  const engineer = new Engineer("BOB", "1234", "email@gmail.com", "dogmom3");
  expect(engineer.name).toBe("BOB");
  expect(engineer.id).toBe("1234");
  expect(engineer.email).toBe("email@gmail.com");
  expect(engineer.gitHub).toBe("dogmom3");
});
