import React from 'react';
import RecentBroadcasts from './RecentBroadcasts.jsx';
import RecentHighlights from './RecentHighlights.jsx';
import AllVideos from './AllVideos.jsx';
import { Switch, HashRouter, Route } from 'react-router-dom';


/*
For faster loading static page, un-comment path to gameData_webpImages.js, above.
And for non-optimized static page, un-comment path to gameData.js.
*/

export default class Categorized_Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      /* for dynamic page */
      allVideos: null,
      recentBroadcasts: null,
      recentHighlights: null,
    }
  };

  /* for static page, comment out entire componentDidMount function */
  componentDidMount() {
    let allVideos = {};
    fetch('/recent-broadcasts')
      .then(response => response.json())
      .then((data) => {
        allVideos.recentBroadcasts = data;
        allVideos.recentHighlights = data;
        return allVideos;
      })
      .then((allVideos) => {
        let all = allVideos.recentBroadcasts.concat(allVideos.recentHighlights);
        this.setState({
          allVideos: all,
          recentBroadcasts: allVideos.recentBroadcasts,
          recentHighlights: allVideos.recentHighlights,
        });
      });
  };

  render() {
    if (this.state.recentBroadcasts === null || this.state.recentHighlights === null) {
      return (<div data-testid="loading-div">Loading ...</div>);
    } else {
      return (
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" render={() => (
              <div data-testid="main-container">
                <RecentBroadcasts videos={this.state.recentBroadcasts} />
                <RecentHighlights videos={this.state.recentHighlights} />
                <AllVideos videos={this.state.allVideos} />
              </div>
            )} />
            <Route exact={true} path="/videos" render={() => (
              <div data-testid="main-container">
                <RecentBroadcasts videos={this.state.recentBroadcasts} />
                <RecentHighlights videos={this.state.recentHighlights} />
                <AllVideos videos={this.state.allVideos} />
              </div>
            )} />
            <Route path="/videos/:videoId" render={() => (
              <div data-testid="main-container">
                <RecentBroadcasts videos={this.state.recentBroadcasts} />
                <RecentHighlights videos={this.state.recentHighlights} />
                <AllVideos videos={this.state.allVideos} />
              </div>
            )} />
          </Switch>
        </HashRouter>
      );
    }
  };
};