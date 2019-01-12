import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-size: cover;
  height: 300px;
  overflow: hidden;
`;

const Info = styled.div`
  position: relative;
  background-size: cover;
  height: 220px;
  width: 100%;
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
  height: 80px;
  width: 40px;
  position: relative;
  bottom: -15px;
`;

const VideoTitles = styled.div`
  dispaly: inline-block;
  position: absolute;
  white-space: nowrap;
  bottom: 40px;
  left: 50px;
  font-family: "Verdana", Sans-serif;
  font-size: medium;
  font-weight: bold;
  overflow: hidden;
`;

const GamerName = styled.div`
  dispaly: inline-block;
  position: absolute;
  bottom: 20px;
  left: 50px;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  overflow: hidden;
`;

const GameTitle = styled.div`
  dispaly: inline-block;
  position: absolute;
  white-space: nowrap;
  bottom: 0px;
  left: 50px;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  overflow: hidden;
`;

const Titles = styled.div`
  white-space: nowrap;
  font-family: "Verdana", Sans-serif;
  font-size: medium;
  font-weight: bold;
  padding-bottom: 20px;
  overflow: hidden;
`;

const Duration = styled.div`
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 5px;
  font-family: "Verdana", Sans-serif;
  font-size: xx-small;
  font-weight: normal;
  color: white;
  overflow: hidden;
`;

const Views = styled.div`
  display: inline-block;
  position: absolute;
  top: 130px;
  left: 5px;
  font-family: "Verdana", Sans-serif;
  font-size: xx-small;
  font-weight: normal;
  color: white;
  overflow: hidden;
`;

const TimeStamp = styled.div`
  dispaly: inline-block;
  position: relative;
  white-space: nowrap;
  top: 130px;
  left: 75%;
  font-family: "Verdana", Sans-serif;
  font-size: xx-small;
  font-weight: normal;
  color: white;
`;

const PrevButton = styled.button`
`;

const NextButton = styled.button`
`;

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
  NextButton
}