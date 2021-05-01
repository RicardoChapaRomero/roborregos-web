/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './HorizontalTimeline.css'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const eventsPerView = 3
const eventsPerScroll = 3
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

const tryRequire = (imgPath: string) => {
  try {
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */
    return require(`../../../images/about/timeline/${imgPath}`)
  } catch (err) {
    return imgPath
  }
}
const singleItem = (event: Event) => (
  <Card className="myCard">
    <CardMedia
      component="img"
      height="350"
      image={tryRequire(event.img_path)}
      alt={event.title}
      title={event.title}
    />
    <div className="my-info">
      {event.title}
    </div>
  </Card>
)

function HorizontalTimeline(props: Props) {
  const { events, years } = props
  events.sort((a, b) => new Date(a.year, a.month, 1) - new Date(b.year, b.month, 1))
  const [selectedYear, setSelectedYear] = React.useState(years[0])
  const [mySlider, setSlider] = React.useState(null)

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value)
    const selectedIndexFromYear = events.findIndex((roborregosEvent) => roborregosEvent.year === year)
    mySlider.slickGoTo(selectedIndexFromYear)
  }

  const SamplePrevArrow = () => (
    <button
      type="button"
      onClick={mySlider?.slickPrev}
    >
      {' '}
      prevArrow
    </button>
  )
  const SampleNextArrow = () => (
    <button
      type="button"
      onClick={mySlider?.slickNext}
    >
      {' '}
      nextArrow
    </button>
  )

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: eventsPerView,
    slidesToScroll: eventsPerScroll,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => {
      setSelectedYear(events[current].year)
    },
  }
  const singleDot = (year: string) => (
    <FormControlLabel
      value={year}
      checked={year === selectedYear}
      onClick={handleYearChange}
      control={<Radio color="primary" />}
      label={year}
      labelPlacement="bottom"
    />
  )
  return (
    <Row className="justify-content-center">
      <Col xs={10}>
        <Slider ref={setSlider} id="horizontal-timeline" {...settings}>
          { events.map(singleItem) }
        </Slider>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            {years.map(singleDot)}
          </RadioGroup>
        </FormControl>
      </Col>
    </Row>
  )
}

export default HorizontalTimeline
