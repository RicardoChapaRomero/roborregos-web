// @flow
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import HorizontalTimeline from './HorizontalTimeline'
import './AboutTimeline.css'

type Event = {
    date: string,
    img_path: string,
    title: string,
    description: string,
    year: number,
    month: number
};

type Props = {
  events: Array<Event>,
  years: Array<number>
 };

const AboutTimeline = (props: Props) => {
  const { events, years } = props
  return (
    <div className="about-timeline-container" test-id="1">
      <Container fluid>
        <Row className="justify-content-md-center" id="timeline-title">
          <h1>
            Our Story
          </h1>
        </Row>
        <HorizontalTimeline events={events} years={years} />
      </Container>
    </div>
  )
}

export default AboutTimeline
