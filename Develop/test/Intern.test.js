const Intern = require("../../intern");

test("Can set school via constructor", () => {
  const testValue = "UIUC";
  const e = new Intern("Jon", 1, "test@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jon", 1, "test@email.com", "UIUC");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UIUC";
  const e = new Intern("Jon", 1, "test@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});