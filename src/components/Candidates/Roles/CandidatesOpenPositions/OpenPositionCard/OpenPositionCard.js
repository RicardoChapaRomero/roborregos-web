// @flow
import React from 'react'
import { Card } from 'react-bootstrap'
import placeholder from '../../../../../images/placeholder-rectangle.png'
import './OpenPositionCard.css'

type Position = {
  id: string,
  title: string,
  shortDescription: string,
  path: string
};

type Props = {
  position: Position,
  onClick: (position: Position) => void
};

const tryRequireImg = (img_path: string) => {
  try {
    // $FlowFixMe
    return require(`../../../../../images/candidates/roles/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
  } catch (err) {
    return placeholder
  }
}

const OpenPositionCard = (props: Props) => {
  const { position } = props

  function clicked() {
    const { onClick } = props
    onClick(position)
  }

  return (
    <Card
      className="candidates-open-positions-card"
      key={position.id}
      onClick={clicked}
    >
      <Card.Img
        src={tryRequireImg(position.path)}
        alt="Card image"
        className="candidates-card-img"
      />
      <Card.ImgOverlay className="card-info-body">
        <Card.Body className="candidates-card-container">
          <div className="candidate-card-content">
            <Card.Title className="candidates-card-title">
              {position.title}
            </Card.Title>
            <Card.Text className="candidates-card-text">
              {position.shortDescription}
            </Card.Text>
          </div>

        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  )
}

export default OpenPositionCard
