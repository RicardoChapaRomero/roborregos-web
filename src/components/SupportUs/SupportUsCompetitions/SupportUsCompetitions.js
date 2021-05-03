// @flow
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import placeholder from '../../../images/placeholder-rectangle.png'
import './SupportUsCompetitions.css'
import competitionsData from '../../../data/competitions.json'

type CompetitionType = {
  name: string,
  img: string,
  url: string
};

type Props = {
  language: number
};

const tryRequire = (img_path: string) => {
  try {
    // $FlowFixMe
    return require(`../../../images/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
  } catch (err) {
    return placeholder
  }
}

const description = ['Todo el apoyo va para el desarrollo de los siguientes proyectos:', 'Our sponsors team is part of our development in the following projects:']

const { competitions } = competitionsData

function ContactCompetitions({ language }: Props) {
  return (
    <Row className="contact-competitions-container">
      <Col xs="10">
        <Row className="contact-competitions-title">
          {description[language]}
        </Row>
        <Row>
          { competitions.map((competition: CompetitionType, id: number) => (
            <Col lg="2" md="4" sm="4" xs="6" key={id} test-id={id}>
              <Row className="justify-content-center">
                <a className="competitions-img" href={competition.url} target="_blank" rel="noreferrer">
                  <img src={tryRequire(competition.img)} alt={competition.name} />
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

export default ContactCompetitions
