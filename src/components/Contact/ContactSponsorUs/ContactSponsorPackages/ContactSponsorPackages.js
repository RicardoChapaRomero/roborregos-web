// @flow
import './ContactSponsorPackages.css'

import { Col, Row } from 'react-bootstrap'
import React from 'react'

import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../../images/white_logo.png'

type BenefitsType = {
  es: string,
  en: string
};

type PackageType = {
  name: string,
  benefits: Array<BenefitsType>
};

type Props = {
  packages: Array<PackageType>,
  language: string
};

const ContactSponsorPackages = (props: Props) => {
  const { packages, language } = props
  return (
    <Row className="justify-content-center">
      <Col xs="10" sm="10" md="10" lg="10" xl="10">
        <Row className="justify-content-center mt-4">
          { packages.map((pkg: PackageType, id: number) => (
            <Col
              xs="10"
              sm="6"
              md="6"
              lg="3"
              xl="3"
              className="mt-4"
              key={id}
              test-id={id}
            >
              <Card
                className="packages-card"
              >
                <Card.Body>
                  <h4>
                    { pkg.name }
                  </h4>
                  <hr />
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
                  <Row className="justify-content-center mt-4 package-card-footer">
                    <Col xs="4" sm="4" md="4" lg="4" xl="4" className="no-padding"><hr /></Col>
                    <Col xs="3" sm="3" md="3" lg="3" className="no-padding">
                      <img src={logo} alt="Logo" />
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4" className="no-padding"><hr /></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          )) }
        </Row>
      </Col>
    </Row>
  )
}

export default ContactSponsorPackages
