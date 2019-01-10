import React from 'react';
import Carousel from 'nuka-carousel';
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
// height: 220px;
// width: 300px;

// height: 150px;
// width: 300px;

const Slides = styled.div`
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

export default class RecentHighlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularVideos: null,
      currentImageIndex: 0
    }
    this.getPopularVideos = this.getPopularVideos.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  };

  getPopularVideos = () => {
    let videos = this.props.videos;
    let currentPopList = this.state.popularVideos;
    let newPopList;
    let newTopTitle;
    if (videos === undefined) {
      return null;
    } else {
      videos.sort((a, b) => { return b.view_count - a.view_count; });
      newPopList = videos.slice(0, 10);
      newTopTitle = newPopList[0].video_title;
      this.setState((prevState, props) => {
        if (currentPopList === null || prevState.popularVideos[0].video_title !== newTopTitle) {
          return { popularVideos: newPopList };
        } else {
          return;
        }
      });
    }
  };

  renderCarousel = () => {
    if (this.state.popularVideos === null) {
      return null;
    } else {
      return (
        <div>
          <Container>
            <Titles>Recent highlights and uploads <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Expand All ></a></Titles>
            <Carousel slidesToShow={3} wrapAround={false} cellSpacing={30} renderBottomCenterControls={false} initialSlideHeight={220} initialSlideWidth={300}>
              <Info>
                <Slides img={this.state.popularVideos[0].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[0].duration}</Duration>
                  <Views>{this.state.popularVideos[0].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[0].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[0].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[1].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[1].duration}</Duration>
                  <Views>{this.state.popularVideos[1].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[1].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[1].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[2].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[2].duration}</Duration>
                  <Views>{this.state.popularVideos[2].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[2].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[2].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[4].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[4].duration}</Duration>
                  <Views>{this.state.popularVideos[4].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[4].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[4].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[5].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[5].duration}</Duration>
                  <Views>{this.state.popularVideos[5].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[5].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[5].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[6].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[6].duration}</Duration>
                  <Views>{this.state.popularVideos[6].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[6].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[6].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[7].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[7].duration}</Duration>
                  <Views>{this.state.popularVideos[7].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[7].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[7].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[8].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[8].duration}</Duration>
                  <Views>{this.state.popularVideos[8].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[8].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[8].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
              <Info>
                <Slides img={this.state.popularVideos[9].thumbnail_url}>
                  <Duration>► {this.state.popularVideos[9].duration}</Duration>
                  <Views>{this.state.popularVideos[9].view_count} views</Views>
                  <TimeStamp>{Math.floor((Math.random() * 100) + 1)} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.popularVideos[9].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.popularVideos[9].video_title}</a></VideoTitles>
                  <GamerName><a href="">UserName</a></GamerName>
                  <GameTitle><a href="">GameTitle</a></GameTitle>
                </Details>
              </Info>
            </Carousel>
          </Container>
        </div>
      );
    }
  }

  componentDidUpdate() {
    this.getPopularVideos();
  };

  render() {
    return (
      <div>
        {this.renderCarousel()}
      </div>
    );
  };

}