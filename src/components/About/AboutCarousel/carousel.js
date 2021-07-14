// @flow

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react'
import './carousel.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import { withStyles } from '@material-ui/core/styles'
import useWindowSize from '../../../hooks/useWindowSize'
import { SMALL_WIDTH } from '../../../constants'
import HighPerformanceTeam from '../../../images/about/carousel/High-Performance.jpg'
import SocialProjects from '../../../images/about/carousel/Social-Projects.jpg'
import Events from '../../../images/about/carousel/Events.jpg'
import StudentCommunity from '../../../images/about/carousel/Student-Community.jpg'

const images = [
  {
    title: 'High-Performance Team',
    subtitle: "We participate in different national and international competitions for autonomous robots such as Mexico's TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, we want to demonstrate the potential of Mexico in the development and innovation of technology.",
    img: HighPerformanceTeam,
  },

  {
    title: 'Social Projects',
    subtitle: 'We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had that inspire us.',
    img: SocialProjects,
  },

  {
    title: 'Events & Outreach',
    subtitle: 'We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and many more.',
    img: Events,
  },

  {
    title: 'Student Community',
    subtitle: 'To reach our community, we give free workshops about useful technologies such as: ROS, Git and Machine Learning, as well as our annual biggest event: Candidates, where the team gives weekly classes of basic programming, mechanics and electronics for anyone in the university interested, and organize a robotics tournament to get new members',
    img: StudentCommunity,
  },

]

const ArrowForward = withStyles({
  root: {
    fontSize: '5vh !important',
    opacity: '1 !important',
    color: 'white !important',
  },
})(ArrowForwardIcon)
const ArrowBack = withStyles({
  root: {
    fontSize: '5vh !important',
    opacity: '1 !important',
    color: 'white !important',
  },
})(ArrowBackIcon)

function Carousel() {
  const { width } = useWindowSize()
  const [currImg, setCurrImg] = useState(0)
  if (width > SMALL_WIDTH) {
    return (
      <div className="carousel">
        <div className="leftcarouselInner">
          <div
            className="leftleft"
            onClick={() => {
              if (currImg === 0) {
                setCurrImg(3)
              }
              if (currImg > 0) {
                setCurrImg(currImg - 1)
              }
            }}
          >
            <ArrowBack />
          </div>
          <div className="leftright">
            <div className="text-container">
              <h1>{images[currImg].title}</h1>
              <p>{images[currImg].subtitle}</p>
            </div>

          </div>
          <div className="left3" />
        </div>
        <div className="rightcarouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
          <div className="rightleft" />
          <div
            className="rightright"
            onClick={() => {
              if (currImg === 3) {
                setCurrImg(0)
              }
              if (currImg < 3) {
                setCurrImg(currImg + 1)
              }
            }}
          >
            <ArrowForward />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="smallcarousel" style={{ backgroundImage: `url(${images[currImg].img})` }}>
      <div
        className="left"
        onClick={() => {
          if (currImg === 0) {
            setCurrImg(3)
          }
          if (currImg > 0) {
            setCurrImg(currImg - 1)
          }
        }}
      >
        <ArrowBack />
      </div>
      <div className="center">
        <div className="SmallText-Container">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>

      </div>
      <div
        className="right"
        onClick={() => {
          if (currImg === 3) {
            setCurrImg(0)
          }
          if (currImg < 3) {
            setCurrImg(currImg + 1)
          }
        }}
      >
        <ArrowForward />
      </div>
    </div>

  )
}

export default Carousel
