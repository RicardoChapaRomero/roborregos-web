// @flow
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Grid from '@material-ui/core/Grid'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { XSMALL_WIDTH } from '../../../constants'
import CarouselLearn1 from '../../../images/candidates/carousel_learn/learn1.jpg'
import CarouselLearn2 from '../../../images/candidates/carousel_learn/learn2.jpg'
import CarouselLearn3 from '../../../images/candidates/carousel_learn/learn3.jpg'
import CarouselLearn4 from '../../../images/candidates/carousel_learn/learn4.jpg'
import CarouselHack1 from '../../../images/candidates/carousel_hack/hack1.jpg'
import CarouselHack2 from '../../../images/candidates/carousel_hack/hack2.jpg'
import CarouselHack3 from '../../../images/candidates/carousel_hack/hack3.jpg'
import CarouselSucceed1 from '../../../images/candidates/carousel_succeed/succeed1.jpg'
import CarouselSucceed2 from '../../../images/candidates/carousel_succeed/succeed2.jpg'
import CarouselSucceed3 from '../../../images/candidates/carousel_succeed/succeed3.jpg'
import CarouselSucceed4 from '../../../images/candidates/carousel_succeed/succeed4.jpg'

import './CandidatesCarousel.css'

const gridSlidesFullView = [
  <div className="candidates-carousel-slide">
    <h1 className="Carousel-text-titles"> Learn </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn1}
          alt="first"
        />
      </Grid>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn2}
          alt="second"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn3}
          alt="third"
        />
      </Grid>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn4}
          alt="fourth"
        />
      </Grid>
    </Grid>
  </div>,
  <div className="candidates-carousel-slide">
    <h1 className="Carousel-text-titles"> Hack </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={6}>
        <img
          className="candidates-header-img"
          src={CarouselHack1}
          alt="first"
        />
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12} style={{ marginBottom: '8px' }}>
          <img
            className="candidates-header-img candidates-learn-height"
            src={CarouselHack2}
            alt="second"
          />
        </Grid>
        <Grid item xs={12}>
          <img
            className="candidates-header-img candidates-learn-height"
            src={CarouselHack3}
            alt="third"
          />
        </Grid>
      </Grid>
    </Grid>
  </div>,
  <div className="candidates-carousel-slide">
    <h1 className="Carousel-text-titles"> Succeed </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-succeed-height"
          src={CarouselSucceed1}
          alt="first"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-succeed-height"
          src={CarouselSucceed2}
          alt="first"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-succeed-long-height"
          src={CarouselSucceed3}
          alt="second"
        />
      </Grid>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-succeed-long-height"
          src={CarouselSucceed4}
          alt="third"
        />
      </Grid>
    </Grid>
  </div>,
]

const gridSlidesSmallView = [
  <div className="candidates-carousel-slide">
    <h1 className="Carousel-text-titles"> Learn </h1>
    <Grid className="grid-background" container spacing={2} dispay="inline-flex">
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn2}
          alt="second"
        />
      </Grid>
      <Grid xs={12} container spacing={1}>
        <Grid item xs={12}>
          <img
            className="candidates-header-img candidates-learn-sm-height"
            src={CarouselLearn3}
            alt="third"
          />
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: '8px' }}>
          <img
            className="candidates-header-img candidates-learn-sm-height"
            src={CarouselLearn4}
            alt="fourth"
          />
        </Grid>
      </Grid>
    </Grid>
  </div>,
  <div className="candidates-carousel-slide">
    <h1 className="Carousel-text-titles"> Hack </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={12} container>
        <Grid item xs={6} style={{ paddingRight: '8px' }}>
          <img
            className="candidates-header-img candidates-hack-xs"
            style={{ height: 'calc(35vh - 28px)' }}
            src={CarouselHack2}
            alt="first"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            className="candidates-header-img candidates-hack-xs"
            style={{ height: 'calc(35vh - 28px)' }}
            src={CarouselHack3}
            alt="second"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-hack-sm"
          style={{ height: 'calc(65vh - 28px)' }}
          src={CarouselHack1}
          alt="third"
        />
      </Grid>
    </Grid>
  </div>,
  <div className="candidates-carousel-slide">
    <h1 className="Carousel-text-titles"> Succeed </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed2}
          alt="first"
        />
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed3}
          alt="first"
        />
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed4}
          alt="second"
        />
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed1}
          alt="third"
        />
      </Grid>
    </Grid>
  </div>,
]

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent !important',
  },
})

const CustomNextIcon = withStyles({
  root: {
    fontSize: '6vw !important',
    opacity: '1 !important',
    color: 'white !important',
  },
})(NavigateNextIcon)

const CustomPrevIcon = withStyles({
  root: {
    fontSize: '6vw !important',
    opacity: '1 !important',
    color: 'white !important',
  },
})(NavigateBeforeIcon)

const CustomNextIconSM = withStyles({
  root: {
    fontSize: '16vw !important',
    opacity: '1 !important',
    color: 'white !important',
  },
})(NavigateNextIcon)

const CustomPrevIconSM = withStyles({
  root: {
    fontSize: '16vw !important',
    opacity: '1 !important',
    color: 'white !important',
  },
})(NavigateBeforeIcon)

const CandidatesCarousel = () => {
  const classes = useStyles()

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <Carousel
      className="candidates-carousel"
      navButtonsAlwaysVisible
      autoPlay={false}
      navButtonsProps={{ className: classes.root }}
      indicatorIconButtonProps={{
        style: {
          height: '1.5vw',
          width: '1.5vw',
          padding: '10px',
          border: '3px solid #312e2d',
          color: 'transparent',
          margin: '0 6px',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: '#312e2d',
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '0',
          position: 'relative',
          top: 'min(-35px, -4vh)',
        },
      }}
      NextIcon={(dimensions.width <= XSMALL_WIDTH
        ? <CustomNextIconSM /> : <CustomNextIcon />)}
      PrevIcon={(dimensions.width <= XSMALL_WIDTH
        ? <CustomPrevIconSM /> : <CustomPrevIcon />)}
    >
      { (dimensions.width <= XSMALL_WIDTH
        ? gridSlidesSmallView.map((element) => element)
        : gridSlidesFullView.map((element) => element)) }
    </Carousel>
  )
}

export default CandidatesCarousel
