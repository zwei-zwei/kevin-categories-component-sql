import React from 'react';
import RecentBroadcasts from './RecentBroadcasts.jsx';
import RecentHighlights from './RecentHighlights.jsx';
import PopularClips from './PopularClips.jsx';

export default class Categorized_Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

  };

  componentDidMount() {
    fetch('http://localhost:1128/popular')
    .then(response => response.json())
    .then(data => this.setState({videos: data}));
  }

  render() {
    return (
      <div>
        <RecentBroadcasts videos={this.state.videos} />
        <RecentHighlights videos={this.state.videos} />
        <PopularClips videos={this.state.videos}/>
      </div>
    );
  }
}