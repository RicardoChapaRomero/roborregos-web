// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, Router } from 'react-router-dom'
import { fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import routesData from '../../data/routes.json'

import Footer from './Footer'

// TODO: The function window.scrollTo can and should be mocked.
// Check ContactHeader.test.js: "<ContactHeader> Scrolls to Info" for a similar example

type RouteType = {
  path: string,
  legend: string,
  component: string
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

it('<Footer> Renders correctly', () => {
  act(() => {
    render(
      <MemoryRouter>
        <Footer routes={routesData.routes} />
      </MemoryRouter>, container,
    )
  })

  routesData.routes.forEach((route: RouteType, index: number) => {
    const current_button = document.querySelector(`[eventkey="${index}"]`)
    if (current_button != null) {
      const current_legend = current_button.children
      expect(current_legend).toHaveLength(1)
      expect(current_legend[0].textContent).toBe(route.legend)
      expect(current_button.getAttribute('href')).toBe(route.path)
    } else {
      expect(current_button).not.toEqual(null)
    }
  })
})

it('<Footer> Links correctly when clicked', () => {
  // Instead of storing the browsing history in the browser, during tests
  // its convenient to store it locally in a variable to test
  // wether the routing works properly.
  const history = createMemoryHistory()
  act(() => {
    render(
      <Router history={history}>
        <Footer routes={routesData.routes} />
      </Router>, container,
    )
  })

  routesData.routes.forEach((route: RouteType, index: number) => {
    const current_button = document.querySelector(`[eventkey="${index}"]`)
    if (current_button != null) {

      fireEvent(current_button, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))

      expect(history.location.pathname).toBe(route.path)
    } else {
      expect(current_button).not.toEqual(null)
    }
  })
})

