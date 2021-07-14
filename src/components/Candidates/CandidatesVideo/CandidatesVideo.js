// @flow
import React from 'react'
import './CandidatesVideo.css'

function CandidatesVideo() {
  return (
    <div className="candidates-video-container">
      <iframe
        className="candidates-video"
        src="https://www.youtube.com/embed/Iec50DS8R9Y?controls=0"
        title="Candidates video"
        showinfo={0}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="candidates-video-caption">
        <h className="candidates-video-caption-title">
          WHAT IS CANDIDATES?
        </h>
        <p className="candidates-video-caption-subtitle">
          LEARN, HACK, AND SUCCEED
        </p>
      </div>
    </div>
  )
}

export default CandidatesVideo
