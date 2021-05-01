// @flow
import React from 'react'
import timelineData from '../../data/timeline.json'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutTimeline from './AboutTimeline/AboutTimeline'
import './About.css'

const About = () => {
  document.title = 'RoBorregos | About'
  return (
    <>
      <AboutHeader />
      <AboutTimeline events={timelineData.events} years={timelineData.years} />
    </>
  )
}

export default About
