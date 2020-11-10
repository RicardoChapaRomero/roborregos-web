// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import HomeSingleSponsor from './HomeSingleSponsor'

const sponsor_text_case: string = `
{
    "sponsor": [
        {
        "name": "Tecnológico de Monterrey",
        "img_path": "itesm.png",
        "link": "https://tec.mx/es"
        }, 
        {
        "name": "Lorem Ipsum",
        "img_path": "null.png",
        "link": "https://tec.mx/es"
        }
    ]
}`

const { sponsor } = JSON.parse(sponsor_text_case)

const singleSponsorRendering = (index: number) => {
  const sponsor_rendered = document.querySelector('[test-id="a1"]')
  if (sponsor_rendered != null) {
    expect(sponsor_rendered.classList.contains('single-sponsor'))
    expect(sponsor_rendered.getAttribute('href')).toEqual(sponsor[index].link)
    expect(sponsor_rendered.children).toHaveLength(2)
    expect(sponsor_rendered.children[0].getAttribute('alt')).toEqual(sponsor[index].name)
    expect((sponsor_rendered.children[0]).classList.contains('sponsor-image')).toBe(true)
  } else {
    expect(sponsor_rendered).not.toEqual(null)
  }
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

it('<HomeSingleSponsor> Renders correctly checking the data', () => {
  act(() => {
    render(<HomeSingleSponsor sponsor={sponsor[0]} />, container)
  })

  singleSponsorRendering(0)

  act(() => {
    render(<HomeSingleSponsor sponsor={sponsor[1]} />, container)
  })

  singleSponsorRendering(1)
})
