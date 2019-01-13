import styled from 'styled-components';
import { PrevButton, NextButton } from './Buttons.jsx';

const Container = styled.div`
  position: relative;
  background-size: cover;
  background-color: #fffdff;
  height: 300px;
  margin-bottom: -20px;
  overflow: hidden;
  &:hover ${PrevButton} {
    background-color: #f2f2f2;
    transform: translate(15px);
  }
  &:hover ${NextButton} {
    background-color: #f2f2f2;
    transform: translate(-15px);
  }
`;

const Info = styled.div`
  position: relative;
  background-size: cover;
  height: 220px;
  width: 90%;
  overflow: hidden;
`;

const Image = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  height: 70%;
  width: 100%;
  overflow: hidden;
`;

const Details = styled.div``;

const GameThumbnail = styled.div`
  display: inline-block;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
  height: 58px;
  width: 42px;
  position: relative;
  bottom: -8px;
  :hover {
    cursor: pointer;
  }
`;

const VideoTitles = styled.div`
  dispaly: inline-block;
  position: absolute;
  white-space: nowrap;
  bottom: 40px;
  left: 50px;
  color: black;
  font-family: "Verdana", Sans-serif;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  :hover {
    color: #6441a4;
    text-decoration: underline;
  }
`;

const GamerName = styled.div`
  dispaly: inline-block;
  position: absolute;
  bottom: 20px;
  left: 50px;
  color: black;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  overflow: hidden;
  :hover {
    color: #6441a4;
    text-decoration: underline;
  }
`;

const GameTitle = styled.div`
  dispaly: inline-block;
  position: absolute;
  white-space: nowrap;
  bottom: 0px;
  left: 50px;
  color: black;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  overflow: hidden;
  :hover {
    color: #6441a4;
    text-decoration: underline;
  }
`;

const Titles = styled.div`
  white-space: nowrap;
  font-family: "Verdana", Sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 12px;
  overflow: hidden;
`;

const Duration = styled.div`
  display: inline-block;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  top: 10px;
  left: 5px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  text-decoration: none;
  color: white;
  overflow: hidden;
`;

const Views = styled.div`
  display: inline-block;
  position: absolute;
  top: 130px;
  left: 5px;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  color: white;
  overflow: hidden;
`;

const TimeStamp = styled.div`
  dispaly: inline-block;
  position: relative;
  white-space: nowrap;
  top: 130px;
  left: 70%;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  color: white;
`;

// const PrevButton = styled.button`
//   background-color: white;
//   border: none;
//   border-radius: 5px;
//   margin-left: -10px;
//   margin-bottom: 50px;
//   color: #6441a4;
//   padding: 22px 10px;
//   text-align: right;
//   text-decoration: none;
//   display: inline-block;
//   font-family: 'Verdana', sans-serif;
//   font-size: 15px;
//   font-weight: bold;
//   box-shadow: -5px 10px 15px #d8d8d8;
//   transition: transform 150ms ease-in-out;

// `;

// const NextButton = styled.button`
//   background-color: white;
//   border: none;
//   border-radius: 5px;
//   margin-right: -10px;
//   margin-bottom: 50px;
//   color: #6441a4;
//   padding: 22px 10px;
//   text-align: left;
//   text-decoration: none;
//   display: inline-block;
//   font-family: "Verdana", sans-serif;
//   font-size: 15px;
//   font-weight: bold;
//   box-shadow: 5px 10px 15px #d8d8d8;
//   transition: transform 100ms ease-in-out;
//   :hover {
//     background-color: #f2f2f2;
//     transform: translate(-15px);
//   }
// `;

const ExpandLink = styled.a`
  margin-left: 5px;
  color: #6441a4;
  text-decoration: none;
  font-family: "Verdana", sans-serif;
  font-size: 14px;
  font-weight: normal;
`;

const VideoLink = styled.a`
  text-decoration: none;
`;
const GameLink = styled.a`
text-decoration: none;
`;
const filmSlate = '🎬';
const playArrow = '►';

export {
  Container,
  Info,
  Image,
  Details,
  GameThumbnail,
  VideoTitles,
  GamerName,
  GameTitle,
  Titles,
  Duration,
  Views,
  TimeStamp,
  PrevButton,
  NextButton,
  ExpandLink,
  VideoLink,
  GameLink,
  filmSlate,
  playArrow
}