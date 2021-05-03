// @flow
import React from 'react'
import './ContactDonations.css'
import { Row, Col } from 'react-bootstrap'

const ContactDonations = () => (
  <div className="contact-donations-container">
    <Col xs="10">
      <Row className="donations-title">
        By providing us an anonymous donation,
        you can give us the necessary resources
        for us to develop technology and compete!
      </Row>
      <Row className="donations-title">
        <b>
          Contact us&nbsp;
        </b>
        for more information!
      </Row>
    </Col>
  </div>
)

export default ContactDonations
