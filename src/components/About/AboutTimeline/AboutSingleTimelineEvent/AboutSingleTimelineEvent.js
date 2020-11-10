// @flow
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import placeholder from '../../../../images/placeholder-rectangle.png'
import 'react-vertical-timeline-component/style.min.css'
import './AboutSingleTimelineEvent.css'

type StateProperties = {
  hover: boolean
};

const defaultState: StateProperties = {
  hover: false,
}

type Event = {
  date: string,
  img_path: string,
  title: string,
  description: string
};

type Props = {
  event: Event
};

class AboutSingleTimelineEvent extends React.Component<Props, *> {
  date: string;

  year: string;

  backgroundColor: string;

  contentColor: string;

  displayContent: string;

  displayImg: string;

  constructor(props: Props) {
    super(props)
    const { event } = this.props
    // this.event = event

    this.date = event.date
    this.year = this.date.substr(this.date.length - 4)
    this.backgroundColor = this.resolveColor(this.year)

    this.state = defaultState
  }

  tryRequire = (img_path: string) => {
    try {
      // $FlowFixMe
      return require(`images/about/timeline/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
    } catch (err) {
      return placeholder
    }
  }

  resolveColor = (year: string) => {
    const colors = ['rgb(0, 178, 154)', 'rgb(238, 77, 122)', 'rgb(255, 130, 0)', 'rgb(155, 0, 250)']
    return colors[parseInt(year, 10) % 4]
  }

  resolvePosition = (year: string) => (parseInt(year, 10) % 2 ? 'right' : 'left')

  handleHover() {
    const { hover } = this.state
    this.setState({ hover: !hover })
  }

  resolvePropsValues() {
    const { hover } = this.state
    if (hover) {
      this.contentColor = this.backgroundColor
      this.displayContent = 'block'
      this.displayImg = 'none'
    } else {
      this.contentColor = this.backgroundColor
      this.displayContent = 'none'
      this.displayImg = 'block'
    }
  }

  render() {
    this.resolvePropsValues()
    const { event } = this.props
    return (
      <VerticalTimelineElement
        date={event.date}
        position={this.resolvePosition(this.year)}
        iconStyle={{ background: this.backgroundColor, color: '#fff' }}
        contentStyle={{
          background: this.contentColor,
          color: '#fff',
          boxShadow: '0 0',
          padding: '0',
        }}
        contentArrowStyle={{ borderRight: `7px solid ${this.contentColor}` }}
      >
        <div className="timeline-element-img-container" test-id="1">
          <img
            className="timeline-element-img"
            src={this.tryRequire(event.img_path)}
            alt={event.description}
          />
          <div className="timeline-element-img-title">
            <h3>
              { event.title }
            </h3>
          </div>
        </div>
        <div
          test-id="2"
          className="timeline-element-content"
          style={{ background: this.contentColor }}
        >
          <div>
            <h3>
              { event.title }
            </h3>
            <p>
              { event.description }
            </p>
          </div>
        </div>
      </VerticalTimelineElement>
    )
  }
}

export default AboutSingleTimelineEvent
