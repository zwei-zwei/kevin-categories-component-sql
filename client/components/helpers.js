import {filmSlate, playArrow } from './Styles.jsx';

const slateOrArrow = (type) => {
  if (type === 'video') {
    return playArrow;
  } else if (type === 'clip') {
    return filmSlate;
  }
};

export { slateOrArrow }