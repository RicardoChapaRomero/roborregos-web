/* eslint-disable flowtype/no-weak-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// @flow
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import placeholder from '../../../../images/placeholder-rectangle.png'
import { MEDIUM_WIDTH } from '../../../../constants'
import './MemberModal.css'

type Member = {
  id: number,
  name: string,
  lastname: string,
  github: string,
  github_user: string,
  linkedin: string,
  description: string,
  class: string,
  semesters: string,
  subtitle: string,
  status: string,
  role: string
};

type Props = {
  member: Member,
  onHide: any
};

type State = {
  show_large: boolean
};

/** Component class of Members' grid. */
class MemberModal extends Component<Props, State> {
  member: Member;

  handleHideModal: any;

  /**
  * Class constructor
  * @param {active_members} props: Lists of active and inactive members.
  */
  constructor(props: Props) {
    super(props)

    this.tryRequire = this.tryRequire.bind(this)
    this.memberFullName = this.memberFullName.bind(this)
    this.updateSizeView = this.updateSizeView.bind(this)

    this.member = props.member
    this.handleHideModal = props.onHide

    this.state = {
      show_large: (window.innerWidth >= MEDIUM_WIDTH),
    }
  }

  /** Adds event listeners for modal hiding and responsivity. */
  componentDidMount() {
    window.addEventListener('resize', this.updateSizeView)
  }

  /**
  * Parses contact button links for each member.
  * @param {string} platform: Social media platform.
  * @param {string} className: String for classname.
  * @return {Element}
  */
  getContactButton(platform: string, className: string) {
    let href; let icon = ''; let user

    switch (platform) {
      case 'github':
        href = this.member.github
        icon = 'fa-github'
        user = this.member.github_user
        break
      case 'linkedin':
        href = this.member.linkedin
        icon = 'fa-linkedin'
        user = 'LinkedIn'
        break
      default:
        break
    }
    return (
      <Button
        href={href}
        className={className}
      >
        <Icon className={`fab ${icon} fa-fw`} />
        <span
          className="member-username"
          data-testid={user}
        >
          { user }
        </span>
      </Button>
    )
  }

  /**
  * Parses path to member image
  * @param {string} imgPath: Path to member's photographs.
  * @return {string} if valid path to image, if invalid it returns
  *  the path to a placeholder.
  */
  tryRequire = (imgPath: string) => {
    try {
      return require(`../../../../images/members/${imgPath}`)
    } catch (err) {
      return placeholder
    }
  }

  /**
  * Parses mamber's full name
  * @return {string}
  */
  memberFullName = () => `${this.member.name} ${this.member.lastname}`

  /** Updates state.show_large for responsivity. */
  updateSizeView = () => {
    this.setState({
      show_large: (window.innerWidth >= MEDIUM_WIDTH),
    })
  }

  /**
  * Generates buttons for member's contact info.
  * @return {Element} Button
  */
  generateDataButtons() {
    const { show_large } = this.state
    const { github, linkedin } = this.member
    let className = ''
    if (show_large) {
      className = 'member-modal-btn'
    } else {
      className = 'icon-small'
    }
    return (
      <div className="data-buttons">
        { (github !== '')
          ? this.getContactButton('github', className) : null }
        <br />
        { (linkedin !== '')
          ? this.getContactButton('linkedin', className) : null }
        <br />
      </div>
    )
  }

  /**
  * Generates large view responsive components
  * @return {Element} Member modal
  */
  largeView() {
    const {
      subtitle, status, role, id, semesters, description,
    } = this.member
    return (
      <div className="member-modal-container">
        <div className="container-helper">
          <Row className="justify-content-center main-modal-row">
            <Col lg="3" className="image-col">
              <div className="image-cropper">
                <img
                  className="modal-member-image"
                  src={this.tryRequire(`${id}.jpg`)}
                  alt={this.memberFullName()}
                />
              </div>
            </Col>
            <Col lg="5" className="information-col">
              <div
                className="information-container"
              >
                <Row noGutters>
                  <Col xs={{ span: 1, offset: 11 }}>
                    <IconButton
                      className="closing-btn"
                      data-testid="closing-btn"
                      onClick={this.handleHideModal}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Col>
                </Row>
                <Row noGutters>
                  <div className="member-titles">
                    <h2 data-testid="member-fullName">
                      { this.memberFullName() }
                    </h2>
                    <strong>
                      {' '}
                      { role }
                      {' '}
                    </strong>
                    <div
                      className="member-subtitles"
                      style={{
                        display: (status === 'inactive')
                          ? 'block' : 'none',
                      }}
                    >
                      <h6>
                        <div>
                          {' '}
                          { subtitle }
                          {' '}
                        </div>
                        <div data-testid="member-subtitles">
                          {`Since ${this.member.class}, ${semesters} semesters`}
                        </div>
                      </h6>
                    </div>
                  </div>

                </Row>
                <Row noGutters>
                  <p className="member-data" data-testid="member-data">
                    { description }
                  </p>
                </Row>
                <Row noGutters className="justify-content-center">
                  { this.generateDataButtons() }
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  /**
  * Generates small view responsive components
  * @return {Element} Mmember modal
  */
  smallView() {
    const {
      subtitle, status, role, id, semesters, description,
    } = this.member
    return (
      <div
        className="member-modal-container"
      >
        <div className="container-helper">
          <Row className="main-modal-row">
            <div className="close-button">
              <Col>
                <IconButton
                  className="icon-small"
                  data-testid="icon-small"
                  onClick={this.handleHideModal}
                >
                  <CloseIcon />
                </IconButton>
              </Col>
            </div>
            <Row
              noGutters
              className="image-col-small"
            >
              <div className="image-cropper">
                <img
                  className="modal-member-image"
                  src={this.tryRequire(`${id}.jpg`)}
                  alt={this.memberFullName()}
                />
              </div>
            </Row>
            <div
              className="description-small"
            >
              <Row noGutters>
                <div className="member-titles">
                  <h2 className="name-small" data-testid="name-small">
                    { this.memberFullName() }
                  </h2>
                  <strong>
                    {' '}
                    { role }
                    {' '}
                  </strong>
                  <div
                    className="member-subtitles"
                    style={{
                      display: (status === 'inactive')
                        ? 'block' : 'none',
                    }}
                  >
                    <h6>
                      <div>
                        {' '}
                        { subtitle }
                        {' '}
                      </div>
                      <div data-testid="member-subtitles">
                        {`Since ${this.member.class}, ${semesters} semesters`}
                      </div>
                    </h6>
                  </div>
                </div>
              </Row>
              <Row noGutters>
                <div className="member-data" data-testid="member-data">
                  { description }
                </div>
              </Row>
              <Row noGutters className="justify-content-center">
                { this.generateDataButtons() }
              </Row>
            </div>
          </Row>
        </div>
      </div>
    )
  }

  /**
  * Render funciton of member modal
  * @return {components} Member modal
  */
  render() {
    const { show_large } = this.state
    if (show_large) {
      return this.largeView()
    }
    return this.smallView()
  }
}

export default MemberModal
