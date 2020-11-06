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
  icon_size: number,
  view_size_large: boolean
};

class Footer extends Component<Props, State> {
  constructor(props : Props) {
    super(props)

    this.state = {
      icon_size: (window.innerWidth >= MOBILE_WIDTH) ? 40 : 35,
      view_size_large: (window.innerWidth > MEDIUM_WIDTH),
    }
  }

  setSizeAtributes = () => {
    this.setState({
      icon_size: (window.innerWidth >= MOBILE_WIDTH) ? 40 : 35,
      view_size_large: (window.innerWidth > MEDIUM_WIDTH),
    })
  }

  scrollToUp = () => {
    window.scrollTo(0,0)
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSizeAtributes)
  }

  largeView() {
    const { routes } = this.props
    return (
      <div className="footer-container">
        <Row className="footer-row">
          <Col lg="4" className="col-logo">
            <img src={logo} className="footer-logo" alt="logo" />
          </Col>
          <Col lg={{ offset: 1 }} className="sitemap-container">
          {routes.map((route: RouteType, index: number) => (
              <Link
                eventkey={index}
                key={index}
                className='sitemap-link'
                to={route.path}
                onClick = {this.scrollToUp}
              >
                <div className="navbar-btn-legend">
                  { route.legend }
                </div>
              </Link>
            ))}
          </Col>
          <Col lg="2" >
            <a id="back-to-top" onClick={this.scrollToUp}> <ExpandLessIcon />
                  Back to Top </a>
          </Col>
        </Row>
        <Row className="row-socialMedia justify-content-end">
          <Col lg = "4" > 
                <a target="_blank" href={'https://www.instagram.com/roborregos/'} className="icon-link">
                <InstagramIcon style={{ fontSize: this.state.icon_size }} />
                </a>
                <a target="_blank" href={'https://www.facebook.com/RoBorregos/'} className="icon-link">
                <FacebookIcon style={{ fontSize: this.state.icon_size }} />
                </a>
                <a target="_blank" href={'https://github.com/RoBorregos/'} className="icon-link">
                <GitHubIcon style={{ fontSize: this.state.icon_size - 5 }} />
                </a>
                <div className="mark-text">
                  @2020 RoBorregos
                </div>
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
            <Row noGutters className="goback-container justify-content-end pr-3">
            <a id="back-to-top" onClick={this.scrollToUp}> <ExpandLessIcon />
                  Back to Top </a>
            </Row>
            <Row noGutters className="sitemap-container">
              <div>
              {routes.map((route: RouteType, index: number) => (
              <Link
                eventkey={index}
                key={index}
                className='sitemap-link'
                to={route.path}
                onClick={this.scrollToUp}
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
                <a target="_blank" href={'https://www.instagram.com/roborregos/'} className="icon-link">
                <InstagramIcon style={{ fontSize: this.state.icon_size }} />
                </a>
                <a target="_blank" href={'https://www.facebook.com/RoBorregos/'} className="icon-link">
                <FacebookIcon style={{ fontSize: this.state.icon_size }} />
                </a>
                <a target="_blank" href={'https://github.com/RoBorregos/'} className="icon-link">
                <GitHubIcon style={{ fontSize: this.state.icon_size - 5 }} />
                </a>
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
