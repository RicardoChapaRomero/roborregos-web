// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import HomeSponsors from './HomeSponsors'

type SponsorType = {
    name: string,
    img_path: string,
    link: string
  };

const sponsors_text: string = `
{
    "sponsors" : [
        {
        "name": "Tecnológico de Monterrey",
        "img_path": "itesm.png",
        "link": "https://tec.mx/es"
        },
        {
        "name": "Steren",
        "img_path": "steren.png",
        "link": "https://www.steren.com.mx"
        },
        {
        "name": "Oneila",
        "img_path": "oneila.png",
        "link": "http://www.oneila.mx"
        },
        {
        "name": "Teknik",
        "img_path": "teknik.png",
        "link": "https://teknik.mx/"
        }
    ]
}`
const { sponsors } = JSON.parse(sponsors_text)

const checkTitleRendering = () => {
  const container_row = document.querySelector('[test-id="sponsors-container"]')
  if (container_row != null) {
    expect(container_row.children).toHaveLength(1)
    expect(container_row.children[0].children).toHaveLength(2)
    expect(container_row.children[0].children[0].textContent).toEqual('Sponsors')
  } else {
    expect(container_row).not.toEqual(null)
  }
}

const checkSponsorsRendering = () => {
  sponsors.forEach((current_sponsor: SponsorType, index: number) => {
    const rendered_sponsor = document.querySelector(`[test-id="${index}"]`)
    if (rendered_sponsor != null) {
      expect((rendered_sponsor).classList.contains('sponsor-col')).toBe(true)
      expect(rendered_sponsor.children).toHaveLength(1)
      expect(rendered_sponsor.children[0].classList.contains('single-sponsor'))
      expect(rendered_sponsor.children[0].getAttribute('href')).toEqual(current_sponsor.link)
      expect(rendered_sponsor.children[0].children).toHaveLength(2)
      expect(rendered_sponsor.children[0].children[0].getAttribute('alt')).toEqual(current_sponsor.name)
      expect((rendered_sponsor.children[0].children[0]).classList.contains('sponsor-image')).toBe(true)
    } else {
      expect(rendered_sponsor).not.toEqual(null)
    }
  })
}

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  if (document.body != null) {
    document.body.appendChild(container)
  } else {
    expect(document.body).not.toEqual(null)
  }
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  if (container != null) {
    container.remove()
  } else {
    expect(container).not.toEqual(null)
  }
  container = null
})

it('<HomeSponsors> Renders correctly checking the data', () => {
  act(() => {
    render(<HomeSponsors sponsors={sponsors} />, container)
  })

  checkSponsorsRendering()
  checkTitleRendering()
})
