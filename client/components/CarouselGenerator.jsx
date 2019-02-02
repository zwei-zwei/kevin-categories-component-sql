import React from 'react';
import Carousel from 'nuka-carousel';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SlideGenerator from './SlideGenerator.jsx';
import { Container, Titles, ExpandLink } from './Styles.jsx';
import { PrevButton, NextButton } from './Buttons.jsx';
import Videos from './Videos.jsx';

export default class CarouselGenerator extends React.Component {
  render() {
    let slides = this.props.videos.map((video, index) => {
      return (<SlideGenerator video={video} key={index} type={this.props.type}></SlideGenerator>);
    });

    return (
      <Router>
        <Switch>

          <div>
            <Container className="mainContainer">
              <Titles>{this.props.title}
                <ExpandLink>
                  <Link to="/videosAll">Expand All ></Link>
                </ExpandLink>
              </Titles>
              <Carousel
                slidesToShow={2}
                wrapAround={false}
                cellSpacing={0}
                initialSlideHeight={220}
                initialSlideWidth={300}
                renderBottomCenterControls={false}
                framePadding={"22px"}
                renderCenterLeftControls={({ previousSlide }) => (
                  <PrevButton onClick={previousSlide}>&#60;</PrevButton>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <NextButton onClick={nextSlide}>></NextButton>
                )}
              >
                {slides}
              </Carousel>
            </Container>
          </div>

          <Route path="/videosAll" component={Videos} />
        </Switch>
      </Router>
    );
  };
};