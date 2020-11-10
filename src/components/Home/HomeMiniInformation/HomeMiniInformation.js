// @flow
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHistory, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import './HomeMiniInformation.css'

const HomeMiniInformation = () => (
  <div id="home-mini-information-container" test-id="1">
    <div id="background-filter">
      <Container>
        <Row className="justify-content-center" test-id="2">
          <Col className="col-icon" xs={{ span: 3 }}>
            <div className="circle">
              <div className="icon-container">
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </div>
            </div>
            <h5 className="icon-legend">
              46 members
            </h5>
          </Col>
          <Col className="col-icon" xs={{ span: 3, offset: 1 }}>
            <div className="circle">
              <div className="icon-container">
                <FontAwesomeIcon icon={faHistory} size="2x" />
              </div>
            </div>
            <h5 className="icon-legend">
              Since 2015
            </h5>
          </Col>
          <Col className="col-icon" xs={{ span: 3, offset: 1 }}>
            <div className="circle">
              <div className="icon-container">
                <FontAwesomeIcon icon={faGlobeAmericas} size="2x" />
              </div>
            </div>
            <h5 className="icon-legend">
              Globally known
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
)

export default HomeMiniInformation
