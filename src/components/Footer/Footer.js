// @flow
import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import logo from '../../images/white_logo.png'
import smallLogo from '../../images/small_logo.png'
import { MEDIUM_WIDTH, MOBILE_WIDTH } from '../../constants'
import './Footer.css'
import { Link } from 'react-router-dom'

type RouteType = {
  path: string,
  legend: string,
  component: string
};

type Props = {
  routes: Array<RouteType>
};

type State = {
  icon_size: Number,
  view_size_large: Boolean
};


function sitemapIconButton(link, icon) {
  return (
    <a
      href={link}
      className="icon-link"
    >
      { icon }
    </a>
  )
}

class Footer extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.setSizeAtributes = this.setSizeAtributes.bind(this)
    this.largeView = this.largeView.bind(this)
    this.smallView = this.smallView.bind(this)
    this.goUp = this.goUp.bind(this)

    this.state = {
      icon_size: (window.innerWidth >= MOBILE_WIDTH) ? 40 : 35,
      view_size_large: (window.innerWidth > MEDIUM_WIDTH),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSizeAtributes)
  }

  goUp() {
    window.scrollTo(0, 0)
  }

  setSizeAtributes() {
    this.setState({
      icon_size: (window.innerWidth >= MOBILE_WIDTH) ? 40 : 35,
      view_size_large: (window.innerWidth > MEDIUM_WIDTH),
    })
  }

  largeView() {
    const { routes } = this.props
    return (
      <div className="footer-container">
        <Row className="footer-row">
          <Col lg="4" className="col-logo">
            <img src={logo} className="footer-logo" alt="logo" />
          </Col>
          <Col lg="4" className="sitemap-container">
          {routes.map((route: RouteType, index: number) => (
              <Link
                eventkey={index}
                key={index}
                className='sitemap-link'
                to={route.path}
                onClick={() => {
                  this.handleNavbarClick(route.path)
                }}
              >
                <div className="navbar-btn-legend">
                  { route.legend }
                </div>
              </Link>
            ))}
          </Col>
          <Col lg="4">
            <Row>
              <div className="goback-button">
                <IconButton
                  component="a"
                  onClick={this.goUp}
                  color="inherit"
                  className="sitemap-link"
                >
                  <ExpandLessIcon />
                  <div className="goback-text">
                    Back to top
                  </div>
                </IconButton>
              </div>
            </Row>
            <Row>
              <div className="row-socialMedia">
                { sitemapIconButton('https://www.instagram.com/roborregos/', <InstagramIcon style={{ fontSize: this.state.icon_size }} />) }
                { sitemapIconButton('https://www.facebook.com/RoBorregos/', <FacebookIcon style={{ fontSize: this.state.icon_size }} />) }
                { sitemapIconButton('https://github.com/RoBorregos/', <GitHubIcon style={{ fontSize: this.state.icon_size - 5 }} />) }
                <div className="mark-text">
                  @2020 RoBorregos
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

  smallView() {
    const { routes } = this.props
    return (
      <Container fluid className="footer-container">
        <Row noGutters className="footer-row">
          <Col xs={8} className="col-logo">
            <img src={smallLogo} className="footer-logo" alt="logo" />
          </Col>
          <Col xs={4}>
            <Row noGutters className="goback-container">
              <div className="goback-button">
                <IconButton
                  component="a"
                  onClick={this.goUp}
                  color="inherit"
                  className="sitemap-link"
                >
                  <ExpandLessIcon />
                  <div className="goback-text">
                    Back to top
                  </div>
                </IconButton>
              </div>
            </Row>
            <Row noGutters className="sitemap-container">
              <div>
              {routes.map((route: RouteType, index: number) => (
              <Link
                eventkey={index}
                key={index}
                className='sitemap-link'
                to={route.path}
                onClick={() => {
                  this.handleNavbarClick(route.path)
                }}
              >
                <div className="navbar-btn-legend">
                  { route.legend }
                </div>
              </Link>
            ))}
                <div className="mark-text">
                  @2020 RoBorregos
                </div>
              </div>
            </Row>
            <Row className="row-socialMedia">
              { sitemapIconButton('https://www.instagram.com/roborregos/', <InstagramIcon style={{ fontSize: this.state.icon_size }} />) }
              { sitemapIconButton('https://www.facebook.com/RoBorregos/', <FacebookIcon style={{ fontSize: this.state.icon_size }} />) }
              { sitemapIconButton('https://github.com/RoBorregos/', <GitHubIcon style={{ fontSize: this.state.icon_size - 2, paddingBottom: '0.5vh' }} />) }
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }

  render() {
    return (this.state.view_size_large) ? this.largeView() : this.smallView()
  }
}

export default Footer
