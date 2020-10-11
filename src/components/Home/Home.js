import React, { Component } from 'react'
import sponsorsData from '../../data/sponsors.json'
import Footer from '../Footer/Footer.js'
import HomeHeader from './HomeHeader/HomeHeader.js'
import HomeMiniInformation from './HomeMiniInformation/HomeMiniInformation.js'
import HomeInformation from './HomeInformation/HomeInformation.js'
import HomeSponsors from './HomeSponsors/HomeSponsors.js'
import './Home.css'

class Home extends Component {
  render() {
    document.title = 'RoBorregos'

    return (
      <div className="home-container">
        <HomeHeader />
        <HomeMiniInformation />
        <HomeInformation />
        <HomeSponsors sponsors={sponsorsData.sponsors} />
      </div>
    )
  }
}

export default Home
