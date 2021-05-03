// @flow
import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { Container, Row } from 'react-bootstrap'
import HorizontalTimeline from './HorizontalTimeline'
import './AboutTimeline.css'
import { SMALL_WIDTH } from '../../../constants'
import AboutSingleTimelineEvent from './AboutSingleTimelineEvent/AboutSingleTimelineEvent'
import useWindowSize from '../../../hooks/useWindowSize'

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

function AboutTimeline(props: Props) {
  const { events, years } = props
  const { width } = useWindowSize()

  if (width > SMALL_WIDTH) {
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
        {' '}

      </Container>
    </div>
  )
}
export default AboutTimeline
