// @flow
import './SponsorPackages.css'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/white_logo.png'
import sponsorsData from '../../../data/sponsors.json'

type BenefitsType = {
  es: string,
  en: string
};

type PackageType = {
  name: string,
  benefits: Array<BenefitsType>
};

type Props = {
  language: string
};

const email_button = { es: '¡Envíanos un email!', en: 'Send us an email!' }

const SponsorPackages = (props: Props) => {
  const { language } = props
  const scrollToMailForm = () => {
    const forms = document.getElementById('send-email')
    if (forms !== null) {
      forms.scrollIntoView({ block: 'end' })
    }
  }
  return (
    <div className="contact-sponsor-us">
      <Row className="justify-content-center mt-4">
        { sponsorsData.packages.map((pkg: PackageType, id: number) => (
          <Col
            xs="10"
            md="6"
            lg="3"
            className="package-column"
            key={id}
            test-id={id}
          >
            <Card
              className="packages-card"
            >
              <Card.Body>
                <h4 className="package-title">
                  { pkg.name }
                </h4>
                <hr />
                <Row className="sponsor-package-content-container">
                  { pkg.benefits.map((benefit: BenefitsType, second_id: number) => (
                    <div className="benefit-container" key={`${id}-${second_id}`} test-id={`${id}-${second_id}`}>
                      <div className="benefit-icon">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                      </div>
                      <div className="benefit-text">
                        { language === 'es' ? benefit.es : benefit.en }
                      </div>
                    </div>
                  )) }
                </Row>
                <Row className="justify-content-center mt-4 package-card-footer">
                  <Col xs="4" className="no-padding"><hr /></Col>
                  <Col xs="4" className="no-padding">
                    <img src={logo} alt="Logo" />
                  </Col>
                  <Col xs="4" className="no-padding"><hr /></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        )) }
      </Row>
      <Row className="justify-content-center mt-4 go-send-email-button">
        <div>
          {email_button[language]}
          <br />
          <FontAwesomeIcon
            onClick={scrollToMailForm}
            icon={faAngleDown}
            className="go-send-email-icon"
          />
        </div>
      </Row>
    </div>
  )
}

export default SponsorPackages
