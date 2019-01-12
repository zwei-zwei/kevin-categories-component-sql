import React from 'react';
import {
  Info,
  Image,
  Details,
  GameThumbnail,
  VideoTitles,
  GamerName,
  GameTitle,
  Duration,
  Views,
  TimeStamp
} from './Styles.jsx';

export default class SlideGenerator extends React.Component {
  render () {
    return (
      <Info data-testid="video-info" key={this.props.key}>
        <Image img={this.props.video.thumbnail_url}>
          <Duration>► {this.props.video.duration}</Duration>
          <Views>{this.props.video.view_count} views</Views>
          <TimeStamp>{this.props.video.created_at} hours ago</TimeStamp>
        </Image>
        <Details>
          <GameThumbnail img={this.props.video.game_box_art_url}></GameThumbnail>
          <VideoTitles><a href="">{this.props.video.title}</a></VideoTitles>
          <GamerName><a href="">{this.props.video.user_name}</a></GamerName>
          <GameTitle><a href="">{this.props.video.game_name}</a></GameTitle>
        </Details>
      </Info>
    );
  };
};