// @flow
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselImg1 from '../../../images/candidates/candidates1.png'
import CarouselImg2 from '../../../images/candidates/candidates2.png'
import CarouselImg3 from '../../../images/candidates/candidates3.png'
import './CandidatesCarousel.css'

function CandidatesCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="candidates-header-img-container">
          <img
            className="candidates-header-img"
            src={CarouselImg1}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="candidates-header-img-container">
          <img
            className="candidates-header-img"
            src={CarouselImg2}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="candidates-header-img-container">
          <img
            className="candidates-header-img"
            src={CarouselImg3}
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default CandidatesCarousel
