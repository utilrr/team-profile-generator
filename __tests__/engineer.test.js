//variables to include jest and the engineer.js file
const { TestWatcher } = require("jest");
const Engineer = require("../lib/Engineer");

//checks to see that the engineers role returns the correct answer
test("check engineer role", () => {
  const engineer = new Engineer("Bob", "1234", "bob@email.com", "utilrr");
  expect(engineer.getRole()).toBe("Engineer");
});

//checks to see if all other engineer data returns correctly
test("engineer class", () => {
  const engineer = new Engineer("Bob", "1234", "bob@email.com", "utilrr");
  expect(engineer.name).toBe("Bob");
  expect(engineer.id).toBe("1234");
  expect(engineer.email).toBe("bob@email.com");
  expect(engineer.gitHub).toBe("utilrr");
});
