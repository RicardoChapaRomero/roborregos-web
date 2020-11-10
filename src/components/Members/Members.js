// @flow
import React, { Component } from 'react'
import MembersGrid from './MembersGrid/MembersGrid'
import MembersHeader from './MembersHeader/MembersHeader'
import MembersJoinUs from './MembersJoinUs/MembersJoinUs'
import Footer from '../Footer/Footer'
import './Members.css'

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

type MembersData = {
  members: Array<Member>
};

type Props = {
  membersData: MembersData
};

/** Component class of Members page. */
class Members extends Component <Props> {
  members: Array<Member>;

  /**
 * Class constructor
 * @param {list} props: List of member data.
 */
  constructor(props: Props) {
    super(props)
    this.members = props.membersData.members
  }

  /**
 * Renders Responsive view of Member's body page.
 * @return {renderized_component} Heder, grid, join us section and footer.
 */
  render() {
    document.title = 'RoBorregos | Members'
    const inactive = this.members.filter((member) => member.status === 'inactive').sort((a, b) => b.id - a.id)
    const active = this.members.filter((member) => member.status === 'active'
      || member.status === 'comitee').sort((a, b) => a.id - b.id)
    return (
      <div className="members-container">
        <MembersHeader />
        <MembersGrid active_members={active} inactive_members={inactive} />
        <MembersJoinUs />
        <Footer routes = {this.props.routes} />
      </div>
    )
  }
}

export default Members
