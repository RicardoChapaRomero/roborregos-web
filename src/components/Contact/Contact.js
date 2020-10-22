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

type RouteType = {
  path: string,
  legend: string,
  component: string
};

type Props = {
  routes: Array<RouteType>
};

class Contact extends Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    document.title = 'RoBorregos | Contact'
    const {routes} = this.props
  return (
    <div className="contact-container">
      <ContactHeader />
      <ContactSponsorUs url_contact={sponsorsData.url_contact} packages={sponsorsData.packages} />
      <ContactDonations />
      <ContactCompetitions competitions={competitionsData.competitions} />
      <Footer routes = {routes} />
    </div>
  );
  }
}

export default Contact
