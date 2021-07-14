// @flow
import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import OpenPositionCard from './OpenPositionCard/OpenPositionCard'
import './CandidatesOpenPositions.css'
import FormsModal from './FormsModal/FormsModal'

type Position = {
  id: string,
  title: string,
  shortDescription: string,
  path: string
};

type PositionsData = {
  positions: Array<Position>,
  url_facebook: string,
  url_form: string
};

type Props = {
  positionsData: PositionsData
};

const CandidatesOpenPostions = (props: Props) => {
  const { positionsData: { positions } } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPosition, setSelectedPos] = useState(positions[0])
  const [trySubmit, setTrySubmit] = useState(false)

  const onSubmit = () => {
    setTrySubmit(true)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const openModal = (pos: Position) => {
    setSelectedPos(pos)
    setIsModalOpen(!isModalOpen)
    setTrySubmit(false)
  }

  return (
    <Row className="justify-content-center mt-4 roles">
      <Col xs="12">
        <Row className="positions-card-container">
          {positions.map((position) => (
            <OpenPositionCard
              className="position-card"
              position={position}
              onClick={((pos: Position) => openModal(pos))}
            />
          ))}
        </Row>
      </Col>
      <FormsModal
        onSubmit={() => onSubmit()}
        selectedPosition={selectedPosition}
        isOpen={isModalOpen}
        toggle={() => toggleModal()}
        trySubmit={trySubmit}
      />
    </Row>
  )
}

export default CandidatesOpenPostions
