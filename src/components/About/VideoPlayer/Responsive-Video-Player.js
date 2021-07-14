// @flow
import React from 'react'
import './Responsive-Video-Player.css'

function RoborregosVideo() {
  return (
    <div className="why-are-we-roborregos">
      <iframe
        className="roborregos-video"
        src="https://www.youtube.com/embed/LT7QiBrgZ4w?controls=0"
        title="Roborregos video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="roborregos-video-caption">
        <h className="roborregos-video-caption-title">
          Why are we RoBorregos?
        </h>
      </div>
    </div>
  )
}

export default RoborregosVideo
