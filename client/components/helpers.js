import {filmSlate, playArrow } from './Styles.jsx';

const slateOrArrow = (type) => {
  if (type === 'video') {
    return playArrow;
  } else if (type === 'clip') {
    return filmSlate;
  }
};

const gameNameOrClippedBy = (type, gameName, clippedBy) => {

  if (type === 'video') {
    return gameName;
  } else if (type === 'clip') {
    return `Clipped by ${clippedBy}`;
  }
}

export { slateOrArrow, gameNameOrClippedBy }