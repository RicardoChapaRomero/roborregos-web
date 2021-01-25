import React, { useState, useEffect } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Row, Col } from 'react-bootstrap'
import logo from '../../images/small_logo.png'
import { MEDIUM_WIDTH } from '../../constants'
import './Footer.css'

const sitemaps = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/about',
    text: 'About',
  },
  {
    link: '/members',
    text: 'Members',
  },
  {
    link: '/contact',
    text: 'Contact',
  },
  {
    link: '/candidates',
    text: 'Candidates',
  },
  {
    link: '/projects',
    text: 'Projects',
  },
]

const socialMediaIcons = {
  instagram: {
    link: 'https://www.instagram.com/roborregos/',
    icon: InstagramIcon,
  },
  facebook: {
    link: 'https://www.facebook.com/RoBorregos/',
    icon: FacebookIcon,
  },
  github: {
    link: 'https://github.com/RoBorregos/',
    icon: GitHubIcon,
  },
}

const SocialMediaIcons = () => (
  <div className="row-socialMedia">
    {
       Object.values(socialMediaIcons).map((site) => (
         <a href={site.link} className="icon-link">
           <site.icon style={{ fontSize: 40 }} />
         </a>
       ))
    }
  </div>
)

const GoBackButton = () => (
  <div className="goback-button">
    <IconButton
      component="a"
      onClick={() => window.scrollTo(0, 0)}
      color="inherit"
      className="sitemap-link"
      style={{ padding: 0 }}
    >
      <ExpandLessIcon />
      <div className="goback-text">
        Back to top
      </div>
    </IconButton>
  </div>
)

const MarkText = () => (
  <div className="mark-text">
    @2020 RoBorregos
  </div>
)

const Footer = () => {
  const [isViewLarge, setIsViewLarge] = useState(window.innerWidth > MEDIUM_WIDTH)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsViewLarge(window.innerWidth > MEDIUM_WIDTH)
    })
  }, [])

  const renderSitemaps = () => sitemaps.map((sitemap) => (
    <a href={sitemap.link} className="sitemap-link">
      { sitemap.text }
    </a>
  ))

  return (
    <Row className="footer-row">
      <Col lg={4} xs={8} className="col-logo">
        <img src={logo} className="footer-logo" alt="logo" />
      </Col>
      {isViewLarge ? (
        <>
          <Col lg={4} className="sitemap-container">
            {renderSitemaps()}
          </Col>
          <Col lg={4} className="left-panel">
            <GoBackButton />
            <div>
              <SocialMediaIcons />
              <MarkText />
            </div>
          </Col>
        </>
      ) : (
        <Col xs={4} className="left-panel">
          <GoBackButton />
          <div className="sitemap-container">
            {renderSitemaps()}
          </div>
          <MarkText />
          <SocialMediaIcons />
        </Col>
      )}
    </Row>
  )
}

export default Footer
