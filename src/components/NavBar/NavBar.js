// @flow
import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom'
import logo from '../../images/white_logo.png'
import './NavBar.css'

type RouteType = {
  path: string,
  legend: string,
  component: string
};

type Props = {
  routes: Array<RouteType>
};

type State = {
  active_button: string
};

class NavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // this.handleActiveButton = this.handleActiveButton.bind(this);

    const complete_path = window.location.pathname
    const first_slash_index = complete_path.indexOf('/')
    const second_slash_index = complete_path.indexOf('/', first_slash_index + 1)
    const current_path = second_slash_index === -1
      ? complete_path.substring(0, complete_path.length)
      : complete_path.substring(0, second_slash_index)
    this.state = {
      active_button: current_path,
    }
  }

  /*
    TODO: Handle Active Tabs on brand Click
  handleActiveButton() {
    const activeTabs =
      document.getElementById('navbar-container').getElementsByClassName('active');
    if (activeTabs[1]) {
      activeTabs[1].classList.remove('active');
    }
  } */

  getClassName(path: string) {
    const { active_button } = this.state
    return `navbar-btn${(path === active_button) ? ' active' : ''}`
  }

  closeNavbar = () => {
    const navbarCollapseDiv = document.getElementById('basic-navbar-nav')
    if (navbarCollapseDiv != null) {
      const navbarIsNotCollapsed = navbarCollapseDiv.classList.contains('show')

      if (navbarIsNotCollapsed) {
        navbarCollapseDiv.classList.remove('show')
      }
    }
  }

  handleBrandClick = () => {
    // Collapsing the Navbar on small view
    this.closeNavbar()
  }

  handleNavbarClick = (index: string) => {
    this.setState({ active_button: index })
    window.scrollTo(0, 0)
  }

  render() {
    const { routes } = this.props

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        id="app-navbar"
      >
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => {
            this.handleBrandClick()
            this.handleNavbarClick('/')
          }}
        >
          <img
            id="navbar-logo"
            src={logo}
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          expanded="false"
          test-id="navbar-toggle-button"
        />
        <Navbar.Collapse id="basic-navbar-nav" test-id="basic-navbar-collapse">
          <Nav id="navbar-container" className="mr-auto">

            {routes.map((route: RouteType, index: number) => (
              <NavLink
                eventkey={index}
                key={index}
                className='navbar-btn'
                to={route.path}
                exact
                onClick={() => {
                  this.handleNavbarClick(route.path)
                }}
              >
                <div className="navbar-btn-legend">
                  { route.legend }
                </div>
              </NavLink>
            ))}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
