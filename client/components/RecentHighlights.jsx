import React from 'react';
import CarouselGenerator from './CarouselGenerator.jsx';

export default class RecentHighlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      title: 'Recent highlights and uploads'
    }
  };

  componentDidUpdate() {
    this.setState((prevState, props) => {
      let prevTopVideo = prevState.videos[0].video_title;
      let newTopVideo = props.videos[0].video_title;
      if (prevState.videos === null || prevTopVideo !== newTopVideo) {
        return { videos: props.videos };
      } else {
        return;
      }
    });
  };

  render() {
    if (this.state.videos === null) {
      return (<div data-testid="loading-div">Loading ...</div>)
    } else {
      return (
        <div data-testid="main-container">
          <CarouselGenerator videos={this.state.videos} title={this.state.title} type='video'></CarouselGenerator>
        </div>
      );
    }
  };
};