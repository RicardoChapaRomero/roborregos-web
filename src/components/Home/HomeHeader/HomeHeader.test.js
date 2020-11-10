// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import HomeHeader from './HomeHeader'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  if (document.body != null) {
    document.body.appendChild(container)
  } else {
    expect(document.body).not.toEqual(null)
  }
  jest.useFakeTimers()
})

const items = [' create', ' build', ' design', ' code', ' connect', ' compete', ' learn', ' teach']

const testWordByTime = (header_span: HTMLElement) => {
  items.forEach((word: string) => {
    jest.advanceTimersByTime(70 * word.length)
    expect(header_span.children[3].textContent).toEqual(`We${word}|`)
    jest.advanceTimersByTime(2520)
    jest.advanceTimersByTime(50 * word.length)
    expect(header_span.children[3].textContent).toEqual('We |')
  })
}

const homeHeaderRendering = () => {
  const header_span = document.querySelector('[test-id="1"]')
  if (header_span != null) {
    expect(header_span.children).toHaveLength(4)
    expect(header_span.children[0].getAttribute('alt')).toEqual('logo')
    testWordByTime(header_span)
  } else {
    expect(header_span).not.toEqual(null)
  }
}

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

it('<HomeHeader> Renders correctly checking the data', () => {
  act(() => {
    render(<HomeHeader />, container)
  })

  homeHeaderRendering()
})
