import React, { Component } from 'react'
import './MembersJoinUs.css'

/**
 Component of Join us section.
  [WIP] The component is rendered as a section with a clickable button
  that leads to the "members" page for users to get more information.
 */
class MembersJoinUs extends Component {
  /**
 * Renders Responsive view of Member Join Us
 * @return {renderized_component} [WIP].
 */
  render() {
    return (
      <div className="members-join-us">
        <button
          type="button"
          onClick={this.handleClick}
          className="members-join-us-button members-join-us-button-contain members-join-us-button-text"
        >
          Join the Team
        </button>
      </div>
    )
  }
}

export default MembersJoinUs
