// @flow
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import placeholder from '../../../images/placeholder-rectangle.png'
import './ContactCompetitions.css'

type CompetitionType = {
  name: string,
  img: string,
  url: string
};

type Props = {
  competitions: Array<CompetitionType>
};

class ContactCompetitions extends Component<Props> {
  tryRequire = (img_path: string) => {
    try {
      // $FlowFixMe
      return require(`../../../images/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
    } catch (err) {
      return placeholder
    }
  }

  render() {
    const { competitions } = this.props

    return (
      <Row className="contact-competitions-container">
        <Col xs="10">
          <Row className="contact-competitions-title">
            Our sponsors team is part of our development in the following competitions:
          </Row>
          <Row>
            { competitions.map((competition: CompetitionType, id: number) => (
              <Col lg="2" md="4" sm="4" xs="6" key={id} test-id={id}>
                <Row className="justify-content-center">
                  <a className="competitions-img" href={competition.url} target="_blank" rel="noreferrer">
                    <img src={this.tryRequire(competition.img)} alt={competition.name} />
                  </a>
                </Row>
                <Row className="competitions-text">
                  { competition.name }
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ContactCompetitions
