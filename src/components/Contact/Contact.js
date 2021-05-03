// @flow
import React from 'react'
import competitionsData from '../../data/competitions.json'
import sponsorsData from '../../data/sponsors.json'
import ContactSponsorUs from './ContactSponsorUs/ContactSponsorUs'
import ContactDonations from './ContactDonations/ContactDonations'
import ContactCompetitions from './ContactCompetitions/ContactCompetitions'
import HeaderBanner from '../Shared/HeaderBanner/HeaderBanner'

const Contact = () => {
  const headerTitle = 'Contact'
  const headerMainText = ['Would you like to support RoBorregos? Join our sponsors team!']
  const headerSubText = ['Learn More']

  document.title = 'RoBorregos | Contact'

  return (
    <>
      <HeaderBanner
        title={headerTitle}
        mainText={headerMainText}
        subText={headerSubText}
        bgColorScheme={{ primary: '#6A2C94E6', secondary: '#141213E6' }}
        iconColorScheme={{ primary: '#6A2C94', secondary: '#2870CE' }}
      />
      <ContactSponsorUs url_contact={sponsorsData.url_contact} packages={sponsorsData.packages} />
      <ContactDonations />
      <ContactCompetitions competitions={competitionsData.competitions} />
    </>
  )
}

export default Contact
