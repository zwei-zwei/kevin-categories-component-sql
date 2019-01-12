import React from 'react';
import Carousel from 'nuka-carousel';
import SlideGenerator from './SlideGenerator.jsx';
import { Container, Titles, PrevButton, NextButton } from './Styles.jsx';

export default class CarouselGenerator extends React.Component {
  render() {
    let slides = this.props.videos.map((video, index) => {
      return (<SlideGenerator video={video} key={index}></SlideGenerator>);
    });

    return (
      <div>
        <Container>
          <Titles>{this.props.title} <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Expand All ></a></Titles>
          <Carousel
            slidesToShow={3}
            wrapAround={true}
            cellSpacing={30}
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

