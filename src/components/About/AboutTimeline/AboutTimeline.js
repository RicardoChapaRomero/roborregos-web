// @flow
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import AboutSingleTimelineEvent from './AboutSingleTimelineEvent/AboutSingleTimelineEvent'
import './AboutTimeline.css'

type Event = {
    date: string,
    img_path: string,
    title: string,
    description: string
};

type Props = {
  events: Array<Event>
 };

const AboutTimeline = (props: Props) => {
  const { events } = props
  return (
    <div className="about-timeline-container" test-id="1">
      <Container fluid>
        <Row className="justify-content-md-center" id="timeline-title">
          <h1>
            Our Story
          </h1>
        </Row>
        <VerticalTimeline>
          { events.map((event: Event, index: number) => (
            <AboutSingleTimelineEvent
              key={index}
              event={event}
            />
          )) }
        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default AboutTimeline
