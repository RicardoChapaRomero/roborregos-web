//@flow
import React, { Component } from 'react'
import sponsorsData from '../../data/sponsors.json'
import Footer from '../Footer/Footer.js'
import HomeHeader from './HomeHeader/HomeHeader.js'
import HomeMiniInformation from './HomeMiniInformation/HomeMiniInformation.js'
import HomeInformation from './HomeInformation/HomeInformation.js'
import HomeSponsors from './HomeSponsors/HomeSponsors.js'
import './Home.css'

type RouteType = {
  path: string,
  legend: string,
  component: string
};

type Props = {
  routes: Array<RouteType>
};

class Home extends Component<Props> {

  constructor(props : Props){
    super(props)
  }

  render() {
    document.title = 'RoBorregos'
    const {routes} = this.props

    return (
      <div className="home-container">
        <HomeHeader />
        <HomeMiniInformation />
        <HomeInformation />
        <HomeSponsors sponsors={sponsorsData.sponsors} />
        <Footer routes={routes} />
      </div>
    )
  }
}

export default Home
