// @flow
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HomeSingleSponsor from './HomeSingleSponsor/HomeSingleSponsor'
import './HomeSponsors.css'

type SponsorType = {
  name: string,
  img_path: string,
  link: string
};

type Props = {
 sponsors: Array<SponsorType>
};

const HomeSponsors = (props: Props) => {
  const { sponsors } = props
  return (
    <div className="home-sponsors-container">
      <Row className="justify-content-sm-center">
        <Col sm="10">
          <Row className="justify-content-sm-center">
            { sponsors.map((sponsor: SponsorType, index: number) => (
              <Col sm="12" md="6" lg="3" key={index} test-id={index} className="sponsor-col">
                <HomeSingleSponsor
                  sponsor={sponsor}
                />
              </Col>
            )) }
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default HomeSponsors
