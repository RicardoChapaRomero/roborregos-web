import React, { Component } from 'react'
import positionsData from '../../data/positions.json'
import Footer from '../Footer/Footer'
import CandidatesHeader from './CandidatesHeader/CandidatesHeader'
import CandidatesCarousel from './CandidatesCarousel/CandidatesCarousel'
import CandidatesInfo from './CandidatesInfo/CandidatesInfo'
import CandidatesJoinUs from './CandidatesJoinUs/CandidatesJoinUs'
import './Candidates.css'

class Candidates extends Component {
  render() {
    document.title = 'RoBorregos | Candidates'

    return (
      <div className="candidates-container">
        <CandidatesHeader />
        <CandidatesCarousel />
        <CandidatesInfo />
        <CandidatesJoinUs positionsData={positionsData} />     
      </div>
    )
  }
}

export default Candidates
