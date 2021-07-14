// @flow
import React from 'react'
import placeholder from '../../../../images/placeholder-rectangle.png'
import './HomeSingleSponsor.css'

type SponsorType = {
  name: string,
  img_path: string,
  link: string
};

type Props = {
  sponsor: SponsorType
};

const HomeSingleSponsor = (props: Props) => {
  const tryRequire = (img_path: string) => {
    try {
      // $FlowFixMe
      return require(`../../../../images/sponsors/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
    } catch (err) {
      return placeholder
    }
  }
  const { sponsor } = props
  return (
    <a test-id="a1" href={sponsor.link} className="single-sponsor" target="_blank" rel="noreferrer noopener">
      <img
        className="sponsor-image"
        src={tryRequire(sponsor.img_path)}
        alt={sponsor.name}
      />
      <div className="img-filter" />
    </a>
  )
}

export default HomeSingleSponsor
