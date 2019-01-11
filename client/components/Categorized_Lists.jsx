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
    fetch('/recent-broadcasts')
    .then(response => response.json())
    .then((data) => {
      allVideos.recentBroadcasts = data;
      return fetch('/recent-highlights');
    })
    .then(response => response.json())
    .then((data) => {
      allVideos.recentHighlights = data;
      return fetch('/popular-clips');
    })
    .then(response => response.json())
    .then((data) => {
      allVideos.popularClips = data;
      return allVideos;
    })
    .then((allVideos) => {
      console.log(allVideos);
      this.setState({
        recentBroadcasts: allVideos.recentBroadcasts,
        recentHighlights: allVideos.recentHighlights,
        popularClips: allVideos.popularClips
      });
    });
  };

  render() {
    return (
      <div>
        <RecentBroadcasts videos={this.state.recentBroadcasts} />
        <RecentHighlights videos={this.state.recentHighlights} />
        <PopularClips videos={this.state.popularClips} />
      </div>
    );
  }
}

