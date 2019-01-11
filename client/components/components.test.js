import React from 'react';
import { render, cleanup, waitForElement, fireEvent } from 'react-testing-library';
import regeneratorRuntime from 'regenerator-runtime';
import Categorized_Lists from './Categorized_Lists.jsx';
import RecentBroadcasts from './RecentBroadcasts.jsx';
import RecentHighlights from './RecentHighlights.jsx';
import PopularClips from './PopularClips.jsx';
import { recentBroadcasts, recentHighlights, popularClips } from './mockTestData.js';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});
console.error = jest.fn();

test('<Categorized_Lists />', async () => {
  fetch.mockResponses(
    [JSON.stringify(recentBroadcasts), { status: 200 }],
    [JSON.stringify(recentHighlights), { status: 200 }],
    [JSON.stringify(popularClips), { status: 200 }]
  );
  const { debug, getByTestId, queryByTestId, container } = render(<Categorized_Lists />);
  expect(getByTestId('loading-div')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
  await waitForElement(() => getByTestId("main-container"));
  expect(queryByTestId('loading-div')).toBeFalsy();
  //debug();
});

test('<RecentBroadcasts />', async () => {
  const { debug, getByTestId, getAllByTestId, getByText, queryByText } = render(<RecentBroadcasts videos={recentBroadcasts} />);
  const nextButton = getByText('NEXT');
  const prevButton = getByText('PREV');
  await waitForElement(() => getByTestId("main-container"));
  expect(getAllByTestId("video-info").length).toBe(11);
  expect(nextButton.tagName).toBe('BUTTON');
  expect(prevButton.tagName).toBe('BUTTON');
  expect(getByText('Slide 1 of 11')).toBeTruthy();
  fireEvent.click(nextButton);
  expect(getByText('Slide 2 of 11')).toBeTruthy();
  fireEvent.click(prevButton);
  //debug();
});

test('<RecentHighlights />', async () => {
  const { debug, getByTestId, getAllByTestId, getByText, queryByText } = render(<RecentHighlights videos={recentHighlights}/>);
  await waitForElement(() => getByTestId("main-container"));
  const nextButton = getByText('NEXT');
  const prevButton = getByText('PREV');
  await waitForElement(() => getByTestId("main-container"));
  expect(getAllByTestId("video-info").length).toBe(11);
  expect(nextButton.tagName).toBe('BUTTON');
  expect(prevButton.tagName).toBe('BUTTON');
  expect(getByText('Slide 1 of 11')).toBeTruthy();
  fireEvent.click(nextButton);
  expect(getByText('Slide 2 of 11')).toBeTruthy();
  fireEvent.click(prevButton);
  //debug();
});

test('<PopularClips />', async () => {
  const { debug, getByTestId, getAllByTestId, getByText, queryByText } = render(<PopularClips videos={popularClips}/>);
  await waitForElement(() => getByTestId("main-container"));
  const nextButton = getByText('NEXT');
  const prevButton = getByText('PREV');
  await waitForElement(() => getByTestId("main-container"));
  expect(getAllByTestId("video-info").length).toBe(11);
  expect(nextButton.tagName).toBe('BUTTON');
  expect(prevButton.tagName).toBe('BUTTON');
  expect(getByText('Slide 1 of 11')).toBeTruthy();
  fireEvent.click(nextButton);
  expect(getByText('Slide 2 of 11')).toBeTruthy();
  fireEvent.click(prevButton);
  //debug();
});