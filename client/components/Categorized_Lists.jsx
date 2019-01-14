import React from 'react';
import RecentBroadcasts from './RecentBroadcasts.jsx';
import RecentHighlights from './RecentHighlights.jsx';
import PopularClips from './PopularClips.jsx';

export default class Categorized_Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentBroadcasts: null,
      recentHighlights: null,
      popularClips: null,
    }
  };

  componentDidMount() {
    let allVideos = {};
    fetch('http://localhost:1128/recent-broadcasts')
    .then(response => response.json())
    .then((data) => {
      allVideos.recentBroadcasts = data;
      return fetch('http://localhost:1128/recent-highlights');
    })
    .then(response => response.json())
    .then((data) => {
      allVideos.recentHighlights = data;
      return fetch('http://localhost:1128/popular-clips');
    })
    .then(response => response.json())
    .then((data) => {
      allVideos.popularClips = data;
      return allVideos;
    })
    .then((allVideos) => {
      //console.log(allVideos);
      this.setState({
        recentBroadcasts: allVideos.recentBroadcasts,
        recentHighlights: allVideos.recentHighlights,
        popularClips: allVideos.popularClips
      });
    });
  };

  render() {
    if (this.state.recentBroadcasts === null || this.state.recentHighlights === null || this.state.popularClips === null) {
      return (<div data-testid="loading-div">Loading ...</div>);
    } else {
      return (
        <div data-testid="main-container">
          <RecentBroadcasts videos={this.state.recentBroadcasts} />
          <RecentHighlights videos={this.state.recentHighlights} />
          <PopularClips videos={this.state.popularClips} />
        </div>
      );
    }
  };
};
