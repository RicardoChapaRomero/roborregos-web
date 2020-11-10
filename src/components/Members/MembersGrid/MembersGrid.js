/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// @flow
import React, { Component } from 'react'
import Carousel from 'react-material-ui-carousel'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog, faCode, faBullhorn, faMicrochip, faRocket,
}
  from '@fortawesome/free-solid-svg-icons'
import placeholder from '../../../images/placeholder-rectangle.png'
import { LARGE_WIDTH, MEDIUM_WIDTH, MOBILE_WIDTH } from '../../../constants'
import MemberModal from './MemberModal/MemberModal'
import './MembersGrid.css'

type Member = {
  id: number,
  name: string,
  lastname: string,
  github: string,
  github_user: string,
  linkedin: string,
  resume_link: string,
  description: string,
  class: string,
  semesters: string,
  subtitle: string,
  status: string,
  role: string
};

type Props = {
  active_members: Array<Member>,
  inactive_members: Array<Member>
};

type State = {
  show_modal: boolean,
  member: Member,
  active: boolean,
  number_of_columns: number
};

/** Component class of Members' grid. */
class MembersGrid extends Component<Props, State> {
  active_members_keys: Array<number>;

  inactive_members_keys: Array<number>;

  /**
  * Class constructor
  * @param {list} props: Lists of active and inactive members.
  */
  constructor(props: Props) {
    super(props)
    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleHideModal = this.handleHideModal.bind(this)
    this.updateNumberOfColumns = this.updateNumberOfColumns.bind(this)
    this.generateGridList = this.generateGridList.bind(this)
    this.keyFunction = this.keyFunction.bind(this)
    this.carouselItem = this.carouselItem.bind(this)
    this.updateMember = this.updateMember.bind(this)
    this.changeMemberUIArrows = this.changeMemberUIArrows.bind(this)
    this.active_members_keys = props.active_members.map((member) => (member.id))
    this.inactive_members_keys = props.inactive_members.map((member) => (member.id))
    this.state = {
      show_modal: false,
      member: props.active_members[0],
      active: true,
      number_of_columns: this.numberOfColumns(),
    }
  }

  /**
  * Adds key and resizing listeners
  */
  componentDidMount() {
    document.addEventListener('keydown', this.keyFunction, false)
    window.addEventListener('resize', this.updateNumberOfColumns)
  }

  /**
  * Returns member icon according to role specified.
  * @param {string} role: Member role.
  * @return {icon}
  */
  memberIcon = (role: string) => {
    if (role === 'Software Development') {
      return faCode
    } if (role === 'Electronics') {
      return faMicrochip
    } if (role === 'Mechanical Design') {
      return faCog
    } if (role === 'Logistics & Sponsorship') {
      return faBullhorn
    }
    return faRocket
  }

  /**
  * Calculates how many members per row to display on the member's grid.
  * @return {number} Number of members per row for grid.
  */
  numberOfColumns = () => {
    if (window.innerWidth >= LARGE_WIDTH) {
      return 5
    }
    if (window.innerWidth >= MEDIUM_WIDTH) {
      return 4
    }
    if (window.innerWidth >= MOBILE_WIDTH) {
      return 3
    }
    return 2
  }

  /**
  * Parses path to member image
  * @param {string} imgPath: Path to member's photographs.
  * @return {path}
  */
  tryRequire = (imgPath: string) => {
    try {
      return require(`images/members/${imgPath}`)
    } catch (err) {
      return placeholder
    }
  }

  /**
  * Shows member's modal by updating state
  * @param {prop} member: Member to be shown.
  */
  handleShowModal = (current_member: Member) => {
    this.setState({
      show_modal: true,
      member: current_member,
      active: this.active_members_keys.includes(current_member.id),
    })
  }

  /**
  * Hides member's modal by updating state.show_modal
  */
  handleHideModal = () => {
    this.setState({
      show_modal: false,
    })
  }

  /**
  * Operations to hide and change modals on pressed arrow keys.
  * @param {KeyboardEvent} event: React event
  */
  keyFunction = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      this.handleHideModal()
    }
    let next_member_index_difference = 0
    if (event.keyCode === 37) {
      next_member_index_difference = -1
    } else if (event.keyCode === 39) {
      next_member_index_difference = 1
    }
    this.updateMember(next_member_index_difference)
  }

  /**
  * Function called from carrousel's change of view to update state.member
  * @param {number} next: Id of next view to be displayed.
  * @param {number} current: Id of current view in display.
  */
  changeMemberUIArrows = (next: number) => {
    const { active_members, inactive_members } = this.props
    const { active } = this.state
    if (active) {
      this.setState({
        member: active_members[next],
      })
    } else {
      this.setState({
        member: inactive_members[next],
      })
    }
  }

  /**
  * Updates state.number_of_columns
  */
  updateNumberOfColumns = () => {
    this.setState({
      number_of_columns: this.numberOfColumns(),
    })
  }

  /**
  * Generates member grid component.
  * @param {prop} members: Member to be shown.
  * @param {string} title: Member to be shown.
  * @return {component} Grid of member list data.
  */
  generateGridList = (members: Array<Member>, title: string) => {
    const { number_of_columns } = this.state
    return (
      <div>
        <div
          style={{ display: (title === '') ? 'none' : 'block' }}
          className="grid-title"
        >
          <h1 className="grid-title-text">
            { title }
          </h1>
        </div>
        <GridList
          cellHeight="auto"
          className="members-grid"
          cols={number_of_columns}
          spacing={3}
        >
          { members.map((member) => (
            <GridListTile
              key={member.id}
              cols={1}
              className="members-grid-tile"
              onClick={() => this.handleShowModal(member)}
            >
              <div className="member-image-container">
                <img
                  className="member-image"
                  src={this.tryRequire(`${member.id}.jpg`)}
                  alt={member.name}
                />
                <div className="member-image-content">
                  <p>
                    { `${member.name} ${member.lastname}` }
                  </p>
                  <div className="member-image-icon">
                    <FontAwesomeIcon
                      icon={this.memberIcon(member.role)}
                      size="1x"
                    />
                  </div>
                </div>
              </div>
            </GridListTile>
          )) }
        </GridList>
      </div>
    )
  }

  /**
  * Returns Component MemberModal with specified member atributes.
  * @param {prop} member: Member object.
  * @return {icon}
  */
  carouselItem = (member: Member) => (
    <MemberModal
      member={member}
      onHide={this.handleHideModal}
    />
  )

  /**
  * Updates member state.
  * @param {number} difference: States if the next member to be shown is
  *  next or previous based on the index difference of the member on the list.
  */
  updateMember = (difference: number) => {
    const { active, member } = this.state
    const { id } = member
    const { active_members, inactive_members } = this.props
    let newId
    if (difference === 0) return
    if (active) {
      newId = (this.active_members_keys.indexOf(id)
        + difference < 0) ? active_members.length - 1
        : (this.active_members_keys.indexOf(id) + difference)
        % active_members.length
      this.setState({
        member: active_members[newId],
      })
    } else {
      newId = (this.inactive_members_keys.indexOf(id)
      + difference < 0) ? inactive_members.length - 1
        : (this.inactive_members_keys.indexOf(id) + difference)
      % inactive_members.length
      this.setState({
        member: inactive_members[newId],
      })
    }
  }

  /**
  * Render funciton of grid and member
  * @return {components} Active and inactive members grid, as well as carousel.
  */
  render() {
    const { active, show_modal, member } = this.state
    const { id } = member
    const { active_members, inactive_members } = this.props
    return (
      <div className="members-grid-container">
        { this.generateGridList(active_members, '') }
        { this.generateGridList(inactive_members,
          'RoBorregos Legacy') }
        <Modal
          className="modal-container"
          show={show_modal}
          dialogAs={() => (
            <Carousel
              className="member-carrousel"
              navButtonsAlwaysVisible
              autoPlay={false}
              timeout={200}
              fullHeightHover
              indicators
              onChange={(next) => {
                this.changeMemberUIArrows(next)
              }}
              index={(active)
                ? this.active_members_keys.indexOf(id)
                : this.inactive_members_keys.indexOf(id)}
              startAt={(active)
                ? this.active_members_keys.indexOf(id)
                : this.inactive_members_keys.indexOf(id)}
            >
              {
              (active)
                ? active_members.map((active_member) => this.carouselItem(active_member))
                : inactive_members.map((inactive_member) => this.carouselItem(inactive_member))
              }
            </Carousel>
          )}
        />
      </div>
    )
  }
}

export default MembersGrid
