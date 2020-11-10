// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import routesData from './data/routes.json'

import Home from './Home'

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

it('<Home> Renders correctly with Title Name', () => {
  act(() => {
    render(<Home routes = {routesData.routes}/>, container)
  })
  expect(document.title).toBe('RoBorregos | Home')
})
