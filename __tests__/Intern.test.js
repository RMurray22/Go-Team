const Intern = require("../lib/Intern");

test("Can create school.", () => {
  const testSchool = "School of Hard Knocks";
  const employeeInstance = new Intern(
    "Luke",
    2,
    "reannu.keeves22@gmail.com",
    testSchool
  );
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "School of Hard Knocks";
  const employeeInstance = new Intern(
    "Luke",
    2,
    "reannu.keeves22@gmail.com",
    testSchool
  );
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Luke",
    2,
    "reannu.keeves22@gmail.com",
    "School of Hard Knocks"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
