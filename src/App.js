// @flow

import React, { Component } from 'react'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Members from './components/Members/Members'
import SupportUs from './components/SupportUs/SupportUs'
import Candidates from './components/Candidates/Candidates'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import routesData from './data/routes.json'
import Project from './components/Projects/Projects'
import projectsData from './data/projects.json'
import Footer from './components/Footer/Footer'

type Props = {};

class App extends Component<Props> {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    )
  }

  render() {
    document.title = 'RoBorregos'

    return (
      <Router>
        <div className="app-container">
          <NavBar routes={routesData.routes} />

          <Route exact path="/" component={() => <Home />} />

          <Route path="/about" component={() => <About />} />

          <Route path="/projects" component={() => <Project projectsData={projectsData} />} />

          <Route path="/members" component={() => <Members />} />

          <Route path="/candidates" component={() => <Candidates />} />

          <Route path="/support-us" component={() => <SupportUs />} />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
