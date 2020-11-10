// @flow
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './MembersHeader.css'

type Props = {};

/** Component class of Members' header. */
class MembersHeader extends Component<Props> {
  /**
 Function to scroll down the window view towards th end of the component.
 */
  scrollToInfo = () => {
    window.scrollBy(0, window.innerHeight - 48 - window.scrollY)
  }

  /**
 * Renders Responsive view of Member's header.
 * @return {renderized_component} Heder banner with legend.
 */
  render() {
    return (
      <div className="members-header">
        <div className="container-legend">
          <h2 className="title-text-banner">
            Members
          </h2>
          <div className="main-text-members">
            <p>
              RoBorrego’s community is made by students with different
              skills in robotics, logistics and networking, all joined
              with a passion for exploring new technologies and sharing
              their knowledge with everybody.
            </p>
          </div>
        </div>
        <div className="members-header-footer">
          <p>
            Scroll down and meet the us!
          </p>
          <FontAwesomeIcon
            onClick={this.scrollToInfo}
            icon={faAngleDown}
            className="icon-btn"
          />
        </div>
      </div>
    )
  }
}

export default MembersHeader
