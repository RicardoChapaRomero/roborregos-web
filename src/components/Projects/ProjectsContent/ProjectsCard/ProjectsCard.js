// @flow
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './ProjectsCard.css'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { SMALL_WIDTH } from '../../../../constants'

const WINDOW_VIEW_PERCENTAGE = 0.95

type Project = {
  title: string,
  description: string,
  image: string,
  wiki: string
};

type Props = {
  index: number,
  project: Project,
  show_scrollers: boolean
};

type State = {
  large_view: boolean
};

/** Component class of Projects' card. */
class ProjectsCard extends Component<Props, State> {
  project: Project;

  index: number;

  show_scrollers: boolean;

  /**
   * Class constructor
   * @param {list} props: List of projects data.
   */
  constructor(props: Props) {
    super(props)
    this.cardContent = this.cardContent.bind(this)
    this.imageContent = this.imageContent.bind(this)
    this.largeView = this.largeView.bind(this)
    this.viewSizeLarge = this.viewSizeLarge.bind(this)
    this.smallView = this.smallView.bind(this)

    this.project = props.project
    this.index = props.index
    this.show_scrollers = props.show_scrollers
    this.state = {
      large_view: this.viewSizeLarge(),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateView)
  }

  updateView = () => {
    this.setState({
      large_view: this.viewSizeLarge(),
    })
  }

  viewSizeLarge = () => {
    if (window.innerWidth > SMALL_WIDTH) {
      return true
    }
    return false
  }

  projectCallback = (link: string) => {
    window.open(link)
  }

  /**
  * Parses path to projects image
  * @param {string} imgPath: Path to project's image/photo.
  * @return {path}
  */
  tryRequire = (imgPath: string) => {
    try {
      /* eslint-disable import/no-dynamic-require */
      /* eslint-disable global-require */
      return require(`../../../../images/projects/${imgPath}`)
    } catch (err) {
      return imgPath
    }
  }

  cardContent = () => (
    <Grow in {...{ timeout: 1500 }} style={{ transformOrigin: 'bottom' }}>
      <Col xs={6} className="card-info">
        <h2 className="title-text-card">
          {this.project.title}
        </h2>
        <div className="main-text-projects">
          <p>
            {this.project.description}
          </p>
        </div>
        <button type="button" className="card-button" onClick={() => { if (this.project.wiki !== '') this.projectCallback(this.project.wiki) }} variant="outline-primary">
          {(this.project.wiki !== '') ? 'Learn more' : 'Coming soon'}
        </button>
      </Col>
    </Grow>
  )

  largeView = () => {
    if (this.index % 2) {
      return (
        <Row className="projects-card">
          {this.cardContent()}
          {this.imageContent()}
        </Row>
      )
    }
    return (
      <Row
        className="projects-card"
        style={{ paddingLeft: '5vw' }}
      >
        {this.imageContent()}
        {this.cardContent()}
      </Row>
    )
  }

  getScrollers = () => {
    if (this.show_scrollers) {
      return (
        <div className="scroll-next">
          <FontAwesomeIcon
            onClick={() => this.scrollToInfo()}
            icon={faAngleDown}
            className="scroll-next-icon"
          />
        </div>
      )
    }
    return (<div />)
  }

  scrollToInfo = () => {
    window.scrollBy(0, window.innerHeight * (WINDOW_VIEW_PERCENTAGE)
    - (window.scrollY - (this.index + 1) * window.innerHeight * (WINDOW_VIEW_PERCENTAGE)))
  }

  smallView = () => (
    <div className="projects-card">
      <div className="title-text-card">
        <h2>
          {this.project.title}
        </h2>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={this.tryRequire(`${this.project.image}.jpg`)} alt={this.project.title} />
      </div>
      <div className="main-text-projects-description">
        {this.project.description}
      </div>
      <div className="button-div">
        <button
          type="button"
          className="card-button-small"
          onClick={() => { if (this.project.wiki !== '') this.projectCallback(this.project.wiki) }}
          variant="outline-primary"
        >
          {(this.project.wiki !== '') ? 'Learn more' : 'Coming soon'}
        </button>
      </div>
    </div>
  )

  imageContent = () => (
    <Col xs={6}>
      <img src={this.tryRequire(`${this.project.image}.jpg`)} className="card-image" alt={this.project.title} />
    </Col>
  )

  /**
 * Renders Responsive view of Projects's card.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    const { large_view } = this.state
    if (large_view) {
      return (
        <div id={`card-${this.index}`}>
          <Fade in {...{ timeout: 2000 }}>
            {this.largeView()}
          </Fade>
          {this.getScrollers()}
        </div>
      )
    }
    return this.smallView()
  }
}

export default ProjectsCard
