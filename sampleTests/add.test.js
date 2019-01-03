import { add } from "./add.js";

//you can console log within the test runner
console.log(add(1, 2));

//unit test -- testing a single function
test('add', () => {
  //tests can be run by assigning values to variables
  const value = add(1, 2);
  expect(value).toBe(3);
  //tests can also be run by calling functions within the expect signature
  expect(add(5, 2)).toBe(7);
});