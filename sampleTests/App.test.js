import { total } from './App';
import { add } from './add';

jest.mock('./add', () => ({
  add: jest.fn(() => 25)
}));

//Integration test
//tests a function that relies on another function
test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1);

  //Redundant
  add.mockImplementation(() => 30);
  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2);
});

