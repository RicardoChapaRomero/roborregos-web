// @flow
import React from 'react'
import Grid from '@material-ui/core/Grid'
import './CandidatesLinks.css'
import roborregosLogo from '../../../images/white_logo.png'
import facebookLogo from '../../../images/candidates/facebook-logo.png'
import instagramLogo from '../../../images/candidates/instagram-logo.png'

function CandidatesLinks() {
  return (
    <Grid
      container
      alignItems="flex-start"
      className="social-media"
      justify="center"
    >
      <Grid item xs={12} className="message-us">
        <h> Message Us! </h>
      </Grid>
      <Grid item xs={12} md={4} onClick={() => window.open('https://www.facebook.com/RoBorregos/')}>
        <img
          className="social-media-logo"
          src={facebookLogo}
          alt="facebook-logo"
        />
        <br />
        <h className="caption"> RoBorregos </h>
      </Grid>
      <Grid item xs={12} md={4}>
        <br />
        <img
          className="roborregos-logo"
          src={roborregosLogo}
          alt="RoBorregos-logo"
        />
        <br />
      </Grid>
      <Grid item xs={12} md={4} onClick={() => window.open('https://www.instagram.com/roborregos/')}>
        <img
          className="social-media-logo"
          src={instagramLogo}
          alt="instagram-logo"
        />
        <br />
        <h className="caption">
          @roborregos
        </h>
      </Grid>
    </Grid>
  )
}

export default CandidatesLinks
