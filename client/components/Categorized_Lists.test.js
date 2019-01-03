import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Categorized_Lists from './Categorized_Lists.jsx';

afterEach(cleanup);

test('<Categorized_Lists />', () => {

  //Renders component <Categorized_Lists />
  //and uses destructuring
  //to assign test methods to component
  const { debug, getByTestId } = render(<Categorized_Lists />);

  //Assigns the button element of <Categorized_Lists />
  //to a variable using its data-testid property
  const counterButton = getByTestId('counter-button');

  //Outputs DOM as string
  debug();

  //Logs tagName value of counter-button
  console.log(counterButton.tagName);

  //Asserts counter-button is a button
  expect(counterButton.tagName).toBe('BUTTON');
  //Asserts counter-button starts at 0
  expect(counterButton.textContent).toBe('0');

  //Asserts counter-button increases by one on click
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('1');
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('2');

  //Outputs DOM as string
  debug();

});