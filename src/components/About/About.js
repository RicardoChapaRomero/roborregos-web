//@flow
import React, { Component } from 'react'
import timelineData from '../../data/timeline.json'
import Footer from '../Footer/Footer'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutTimeline from './AboutTimeline/AboutTimeline'
import './About.css'

type RouteType = {
  path: string,
  legend: string,
  component: string
};

type Props = {
  routes: Array<RouteType>
};

class About extends Component<Props> {

  constructor(props : Props){
    super(props)
  }

  render() {
    document.title = 'RoBorregos | About'
    const {routes} = this.props

    return (
      <div className="about-container">
        <AboutHeader />
        <AboutTimeline events={timelineData.events} />
        <Footer routes = {routes} />
      </div>
    )
  }
}

export default About
