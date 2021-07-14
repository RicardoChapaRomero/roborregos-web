// @flow
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './HomeCarousel.css'

const HomeCarousel = () => {
  /**
  * Parses path to projects image
  * @param {string} imgPath: Path to project's image/photo.
  * @return {path}
  */
  function tryRequire(imgPath: string) {
    try {
      /* eslint-disable import/no-dynamic-require */
      /* eslint-disable global-require */
      return require(`../../../images/home/carousel/${imgPath}`)
    } catch (err) {
      return imgPath
    }
  }

  const images = []
  //  TODO [content]: Define content images
  const imagesNumber = 18

  for (let i = 1; i <= imagesNumber; i += 1) {
    images.push(i.toString())
  }

  return (
    <Carousel
      interval={4000}
      animation="slide"
      autoPlay
      indicators
    >
      {
            images.map((img, index) => (
              <div className="card-image-container ">
                <img src={tryRequire(`${img}.jpg`)} alt={index} />
              </div>
            ))
          }
    </Carousel>
  )
}
export default HomeCarousel
