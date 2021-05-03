// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import competitionsData from '../../../data/competitions.json'

import ContactCompetitions from './ContactCompetitions'

type CompetitionType = {
  name: string,
  img: string,
  url: string
};

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

it('<ContactCompetitions> Renders correctly with data', () => {
  act(() => {
    render(<ContactCompetitions competitions={competitionsData.competitions} />, container)
  })
  competitionsData.competitions.forEach((competition: CompetitionType, id: number) => {
    const current_object = document.querySelector(`[test-id="${id}"]`)
    if (current_object != null) {
      expect(current_object.children).toHaveLength(2)
      expect(current_object.children[1].textContent).toBe(competition.name)

      expect(current_object.children[0].children).toHaveLength(1)
      expect(current_object.children[0].children[0].getAttribute('href')).toBe(competition.url)
    } else {
      expect(current_object).not.toEqual(null)
    }
  })
})
