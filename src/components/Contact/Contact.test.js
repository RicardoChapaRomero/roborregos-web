// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import Contact from './Contact'
import routesData from '../../data/routes.json'

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

it('<Contact> Renders correctly with Title Name', () => {
  act(() => {
    render(<Router> <Contact routes = {routesData.routes}/> </Router>, container)
  })
  expect(document.title).toBe('RoBorregos | Contact')
})
