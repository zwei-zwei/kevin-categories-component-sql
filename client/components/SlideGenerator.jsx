import React from 'react';
import { slateOrArrow } from './helpers.js';
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
  TimeStamp,
  VideoLink,
  GameLink,
} from './Styles.jsx';

export default class SlideGenerator extends React.Component {
  render () {
    return (
      <Info data-testid="video-info" key={this.props.key} className="slideInfo">
        <VideoLink href={this.props.video.url}>
          <Image img={this.props.video.thumbnail_url} stillOne={''} stillTwo={''}>
            <Duration>{slateOrArrow(this.props.type)} {this.props.video.duration}</Duration>
            <Views>{this.props.video.view_count} views</Views>
            <TimeStamp>{this.props.video.created_at} hours ago</TimeStamp>
          </Image>
        </VideoLink>
        <Details>
          <GameLink href={this.props.video.game_url}>
            <GameThumbnail img={this.props.video.game_box_art_url}></GameThumbnail>
          </GameLink>
          <a href={this.props.video.url}><VideoTitles>{this.props.video.title}</VideoTitles></a>
          <a href={this.props.video.user_url}><GamerName>{this.props.video.user_name}</GamerName></a>
          <a href={this.props.video.game_url}><GameTitle>{this.props.video.game_name}</GameTitle></a>
        </Details>
      </Info>
    );
  };
};