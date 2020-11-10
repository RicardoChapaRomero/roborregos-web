import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HeaderImg1 from '../../../images/about/about1.png'
import HeaderImg2 from '../../../images/about/about2.jpg'
import './AboutHeader.css'

const AboutHeader = () => (
  <Carousel controls={false} fade test-id="1">
    <Carousel.Item>
      <div className="about-header-img-container">
        <img
          className="about-header-img"
          src={HeaderImg1}
          alt="First slide"
        />
      </div>
      <div className="right-gradient" />
      <div className="right-text">
        <div className="text-box" test-id="2">
          <h2 className="text-header">
            How it all began
          </h2>
          <p className="text-paragraph">
            In 2015, four students organized themselves to compete in the national robotics
            tournament of Mexico, called TMR. They achieved the pass for the international by
            gaining 1st place in the category Rescue Maze. Astonished by the different tech
            levels of other countries, they started RoBorregos, with the intention of sharing
            this knowledge and experiences through generations.
          </p>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="about-header-img-container">
        <img
          className="about-header-img"
          src={HeaderImg2}
          alt="Second slide"
        />
      </div>
      <div className="left-gradient" />
      <div className="left-text">
        <div className="text-box" test-id="3">
          <h2 className="text-header">
            What we develop for
          </h2>
          <p className="text-paragraph">
            <b>Our vision</b>
            {' '}
            is to become, in the next decade, the best robotics team in Latin America, in
            national and international competitions for university students and be able to
            promote technological development in Mexico.
          </p>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
)

export default AboutHeader
