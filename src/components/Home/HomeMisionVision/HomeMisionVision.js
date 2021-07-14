// @flow
import React from 'react'
import './HomeMisionVision.css'

const HomeMisionVision = () => (
  <div className="home-mision-vision-container">
    <div className="home-mision row">
      <div className="mision-overlay row">
        <div className="col-sm-7 text-mision">
          <h1>Mission </h1>
          <p>
            Create a community that integrates students, teachers, alumni,
            companies, institutions and society in general to promote the
            development of robotics in Mexico.
          </p>
        </div>
      </div>
    </div>
    <div className="home-vision row">
      <div className="vision-overlay row">
        <div className="col-sm-7 offset-sm-5 text-vision">
          <h1> Vision </h1>
          <p> Inspire future generations of the robotics community in Latin&nbsp;America.</p>
        </div>
      </div>
    </div>
  </div>
)

export default HomeMisionVision
