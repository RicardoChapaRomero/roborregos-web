// @flow
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CandidatesOpenPositions from './CandidatesOpenPositions/CandidatesOpenPositions'
import positionsData from '../../../data/positions.json'
import './Roles.css'

const Roles = () => (
  <div className="candidates-join-us">
    <Row>
      <Col className="candidates-join-us-title-container">
        <p> Roles </p>
      </Col>
    </Row>
    <CandidatesOpenPositions positionsData={positionsData} />
  </div>
)

export default Roles
