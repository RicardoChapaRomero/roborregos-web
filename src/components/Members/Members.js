import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import MembersGrid from './MembersGrid/MembersGrid'
import MembersHeader from './MembersHeader/MembersHeader'
import MembersJoinUs from './MembersJoinUs/MembersJoinUs'
import './Members.css'

class Members extends Component {
  constructor(props) {
    super(props)

    this.members = props.membersData.members
  }

  render() {
    document.title = 'RoBorregos | Members'
    const inactive = this.members.filter((member) => member.status === 'inactive').sort((a, b) => b.id - a.id)
    const active = this.members.filter((member) => member.status === 'active' || member.status === 'comitee').sort((a, b) => a.id - b.id)

    return (
      <div className="members-container">
        <MembersHeader />
        <MembersGrid active_members={active} inactive_members={inactive} />
        <MembersJoinUs />
      </div>
    )
  }
}

export default Members
