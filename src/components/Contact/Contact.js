// @flow
import React, { Component } from 'react'
import competitionsData from '../../data/competitions.json'
import sponsorsData from '../../data/sponsors.json'
import Footer from '../Footer/Footer'
import ContactHeader from './ContactHeader/ContactHeader'
import ContactSponsorUs from './ContactSponsorUs/ContactSponsorUs'
import ContactDonations from './ContactDonations/ContactDonations'
import ContactCompetitions from './ContactCompetitions/ContactCompetitions'
import './Contact.css'

class Contact extends Component {
  render() {
    document.title = 'RoBorregos | Contact'
  return (
    <div className="contact-container">
      <ContactHeader />
      <ContactSponsorUs url_contact={sponsorsData.url_contact} packages={sponsorsData.packages} />
      <ContactDonations />
      <ContactCompetitions competitions={competitionsData.competitions} />
      <Footer routes = {this.props.routes} />
    </div>
  );
  }
}

export default Contact
