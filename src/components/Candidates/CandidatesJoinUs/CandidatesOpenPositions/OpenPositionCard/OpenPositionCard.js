// @flow
import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode, faMicrochip, faCog, faBullhorn,
} from '@fortawesome/free-solid-svg-icons'
import './OpenPositionCard.css'

type Position = {
  id: string,
  title: string,
  shortDescription: string
};

type Props = {
  position: Position,
  onClick: (position: Position) => void
};

class OpenPositionCard extends Component<Props> {
  position: Position;

  constructor(props: Props) {
    super(props)
    this.position = props.position
  }

  clicked = () => {
    const { onClick } = this.props
    const pos = this.position
    onClick(pos)
  }

  tryRequire = (id: string) => {
    switch (parseInt(id, 10)) {
      case 1:
        return faCode
      case 2:
        return faMicrochip
      case 3:
        return faCog
      default:
        return faBullhorn
    }
  }

  render() {
    return (
      <Card
        className="candidates-open-positions-card"
        key={this.position.id}
        onClick={this.clicked}
      >
        <Card.Body>
          <Row>
            <Col xs="3" sm="3" md="3" lg="3" xl="3" className="candidates-card-column-image-container">
              <div className="circle">
                <div className="icon-container">
                  <FontAwesomeIcon icon={this.tryRequire(this.position.id)} size="2x" />
                </div>
              </div>
            </Col>
            <Col className="candidates-card-column-text-container-overlay-original" xs="9" sm="9" md="9" lg="9" xl="9">
              <Card.Title className="candidates-card-title">
                {this.position.title}
              </Card.Title>
              <Card.Text className="candidates-card-text">
                {this.position.shortDescription}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}

export default OpenPositionCard
