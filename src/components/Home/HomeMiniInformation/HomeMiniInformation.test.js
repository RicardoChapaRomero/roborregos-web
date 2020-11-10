// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import HomeMiniInformation from './HomeMiniInformation'

const headers = ['46 members', 'Since 2015', 'Globally known']

const checkHomeMiniRendered = () => {
  const mini_information = document.querySelector('[test-id="1"]')
  if (mini_information != null) {
    expect(mini_information.getAttribute('id')).toEqual('home-mini-information-container')
    expect(mini_information.children).toHaveLength(1)
    expect(mini_information.children[0].children).toHaveLength(1)
    const row_container = document.querySelector('[test-id="2"]')
    if (row_container != null) {
      expect(row_container.children).toHaveLength(3)
      for (let index = 0; index < 3; index += 1) {
        expect(row_container.children[index].children).toHaveLength(2)
        expect(row_container.children[index].children[1]).not.toEqual(null)
        expect(row_container.children[index].children[1].textContent).toEqual(headers[index])
      }
    } else {
      expect(row_container).not.toEqual(null)
    }
  } else {
    expect(mini_information).not.toEqual(null)
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

it('<HomeMiniInformation> Renders correctly checking the data', () => {
  act(() => {
    render(<HomeMiniInformation />, container)
  })

  checkHomeMiniRendered()
})
