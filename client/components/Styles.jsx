import styled, { keyframes } from "styled-components"
import { PrevButton, NextButton } from './Buttons.jsx';

const Container = styled.div`
  position: relative;
  background-size: cover;
  background-color: #faf9fa;
  height: 300px;
  margin-top: 0px;
  margin-bottom: 20px;
  overflow: hidden;
  &:hover ${PrevButton} {
    transform: translate(15px);
    box-shadow: -5px 10px 15px #d8d8d8;
  }
  &:hover ${NextButton} {
    transform: translate(-15px);
    box-shadow: 5px 10px 15px #d8d8d8;
  }
`;

const Info = styled.div`
  position: relative;
  background-size: cover;
  height: 220px;
  width: 90%;
  overflow: hidden;
`;

const imageCycle = (image1, image2, image3, image4, image5) => keyframes`
  0%, 19.99% {
    opacity: 1;
    background-image: url(${image2});
  }
  20%, 39.99%{
    opacity: 1;
    background-image: url(${image3});
  }
  40%, 59.99%{
    opacity: 1;
    background-image: url(${image4});
  }
  60%, 79.99%{
    opacity: 1;
    background-image: url(${image5});
  }
  80%, 100%{
    opacity: 1;
    background-image: url(${image1});
  }
`;

const Image = styled.div`
  position: relative;
  background-image: url(${props => props['data-stillone']});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  height: 70%;
  width: 100%;
  overflow: hidden;
  :hover {
    animation: 4000ms ease-in-out ${props => imageCycle(props['data-stillone'], props['data-stilltwo'], props['data-stillthree'], props['data-stillfour'], props['data-stillfive'])} infinite;
  }
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
  padding-bottom: 0px;
  margin-left: 3%;
  margin-bottom: -5px;
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