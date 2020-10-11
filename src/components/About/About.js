import React, { Component } from 'react'
import timelineData from '../../data/timeline.json'
import Footer from '../Footer/Footer'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutTimeline from './AboutTimeline/AboutTimeline'
import './About.css'

class About extends Component {
  render() {
    document.title = 'RoBorregos | About'

    return (
      <div className="about-container">
        <AboutHeader />
        <AboutTimeline events={timelineData.events} />
      </div>
    )
  }
}

export default About
