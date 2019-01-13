import React from 'react';
import Carousel from 'nuka-carousel';
import SlideGenerator from './SlideGenerator.jsx';
import { Container, Titles, PrevButton, NextButton, ExpandLink } from './Styles.jsx';

export default class CarouselGenerator extends React.Component {
  render() {
    let slides = this.props.videos.map((video, index) => {
      return (<SlideGenerator video={video} key={index} type={this.props.type}></SlideGenerator>);
    });

    return (
      <div>
        <Container>
          <Titles>{this.props.title} <ExpandLink href={this.props.videos[0].url}>Expand All ></ExpandLink></Titles>
          <Carousel
            slidesToShow={2}
            wrapAround={false}
            cellSpacing={0}
            initialSlideHeight={220}
            initialSlideWidth={300}
            renderBottomCenterControls={false}
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
    );
  };
};

