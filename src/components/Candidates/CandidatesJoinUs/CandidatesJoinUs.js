// @flow
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import CandidatesOpenPositions from './CandidatesOpenPositions/CandidatesOpenPositions'
import './CandidatesJoinUs.css'

type Position = {
  id: string,
  title: string,
  shortDescription: string
};

type PositionsData = {
  positions: Array<Position>,
  url_facebook: string,
  url_form: string
};

type Props = {
  positionsData: PositionsData
};

class CandidatesJoinUs extends Component<Props> {
  positionsData: PositionsData;

  constructor(props: Props) {
    super(props)
    this.positionsData = props.positionsData
  }

  joinUsCallback() {
    window.open(this.positionsData.url_facebook, '_blank')
  }

  render() {
    return (
      <div className="candidates-join-us">
        <Row>
          <Col className="candidates-join-us-title-container">
            <h2>
              Get to know our main positions!
            </h2>
          </Col>
        </Row>
        <CandidatesOpenPositions positionsData={this.positionsData} />
        <Row>
          <Col className="candidates-join-us-btn-container">
            <button type="submit" onClick={this.joinUsCallback} className="candidates-join-us-btn" variant="outline-primary">
              Talk with us!
            </button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CandidatesJoinUs
