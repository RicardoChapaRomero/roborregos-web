// @flow
import './ContactSponsorUs.css'

import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ContactSponsorPackages from './ContactSponsorPackages/ContactSponsorPackages'

type BenefitsType = {
  es: string,
  en: string
};

type PackageType = {
  name: string,
  benefits: Array<BenefitsType>
};

type Props = {
  url_contact: string,
  packages: Array<PackageType>
};

type State = {
  language: string,
  translate_label: string,
  sponsor_button_label: string,
  title: Array<string>
};

const english_state: State = {
  language: 'en',
  translate_label: 'Traducir a español',
  sponsor_button_label: 'Sponsor us!',
  title: ['Would you like to support RoBorregos?', 'Join our sponsors team!'],
}

const spanish_state: State = {
  language: 'es',
  translate_label: 'Translate to english',
  sponsor_button_label: '¡Patrocinanos!',
  title: ['¿Te gustaría apoyar a RoBorregos?', '¡Sé uno de nuestros patrocinadores!'],
}

class ContactSponsorUs extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = english_state
  }

  sponsorUsCallback = () => {
    const { url_contact } = this.props
    window.open(url_contact, '_blank')
  }

  /**
   * Do the change of the state parameters when the language changes
   * (language, translate button label, and title).
   */
  translate = () => {
    const { language } = this.state
    if (language === 'en') {
      this.setState(spanish_state)
    } else {
      this.setState(english_state)
    }
  }

  render() {
    const { packages } = this.props
    const {
      title, language, sponsor_button_label, translate_label,
    } = this.state
    return (
      <div id="contact-sponsor-us" className="contact-sponsor-us">
        <h2>
          { title[0] }
          <br />
          { title[1] }
        </h2>
        <ContactSponsorPackages packages={packages} language={language} />
        <Row>
          <Col md={4} xs={12} className="offset-md-4 offset-0">
            <button type="button" test-id="sponsor-button" onClick={this.sponsorUsCallback} className="btn contact-sponsor-us-btn mt-4" variant="outline-primary">
              { sponsor_button_label }
            </button>
          </Col>
          <Col md={3} xs={12} style={{ alignSelf: 'center' }}>
            <button type="button" test-id="translate-button" onClick={this.translate} className="btn contact-translate-sponsor-us-btn mt-4" variant="outline-primary">
              { translate_label }
            </button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ContactSponsorUs
