const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "RMurray22";
  const employeeInstance = new Engineer(
    "Reannu",
    2,
    "reannu.keeves22@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "RMurray22";
  const employeeInstance = new Engineer(
    "Rich",
    2,
    "reannu.keeves22@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Rich",
    2,
    "reannu.keeves22@gmail.com",
    "RMurray22"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
