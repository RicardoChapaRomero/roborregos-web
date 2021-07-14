// @flow
import React from 'react'
import CandidatesCarousel from './CandidatesCarousel/CandidatesCarousel'
import Roles from './Roles/Roles'
import HeaderBanner from '../Shared/HeaderBanner/HeaderBanner'
import CandidatesVideo from './CandidatesVideo/CandidatesVideo'
import CandidatesClasses from './CandidatesClasses/CandidatesClasses'
import CandidatesLinks from './CandidatesLinks/CandidatesLinks'

function Candidates() {
  document.title = 'RoBorregos | Candidates'
  const headerTitle = 'Candidates'
  const headerMainText = ["Is RoBorregos' annual recruiting program where students from all majors and semesters come to learn and develop robotics."]
  const headerSubText = ['Are you a candidate?']
  return (
    <>
      <HeaderBanner
        title={headerTitle}
        mainText={headerMainText}
        subText={headerSubText}
        bgColorScheme={{ primary: '#E84B77E6', secondary: '#141213E6' }}
        iconColorScheme={{ primary: '#E84B77', secondary: '#CC2759' }}
      />
      <CandidatesVideo />
      <CandidatesCarousel />
      <Roles />
      <CandidatesClasses />
      <CandidatesLinks />
    </>
  )
}

export default Candidates
