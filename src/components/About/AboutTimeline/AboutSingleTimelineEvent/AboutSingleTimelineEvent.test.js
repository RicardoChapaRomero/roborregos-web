// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import 'intersection-observer'

import AboutSingleTimelineEvent from './AboutSingleTimelineEvent'

const sampleEvent = {
  date: 'sample-date',
  img_path: 'sample-path',
  title: 'sample-title',
  description: 'sample-description',
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

const testStructureFirstPart = () => {
  const component_container = document.querySelector('[test-id="1"]')
  if (component_container != null) {
    expect(component_container.children).toHaveLength(2)
    expect(component_container.children[0].getAttribute('src')).toEqual('placeholder-rectangle.png')
    expect(component_container.children[0].getAttribute('alt')).toEqual(
      sampleEvent.description,
    )
    expect(component_container.children[1].children).toHaveLength(1)
    expect(component_container.children[1].children[0].textContent).toEqual(
      sampleEvent.title,
    )
  } else {
    expect(component_container).not.toEqual(null)
  }
}

const testStructureSecondPart = () => {
  const component_container = document.querySelector('[test-id="2"]')
  if (component_container != null) {
    expect(component_container.children).toHaveLength(1)
    expect(component_container.children[0].children).toHaveLength(2)
    expect(component_container.children[0].children[0].textContent).toEqual(
      sampleEvent.title,
    )
    expect(component_container.children[0].children[1].textContent).toEqual(
      sampleEvent.description,
    )
  } else {
    expect(component_container).not.toEqual(null)
  }
}

it('<AboutSingleTimelineEvent> Renders correctly', () => {
  act(() => {
    render(<AboutSingleTimelineEvent key={1} event={sampleEvent} />, container)
  })
})

it('Reviewing that the structure of the no hover component is correct', () => {
  act(() => {
    render(<AboutSingleTimelineEvent key={1} event={sampleEvent} />, container)
  })
  testStructureFirstPart()
})

it('Reviewing that the structure of hover component is correct', () => {
  act(() => {
    render(<AboutSingleTimelineEvent key={1} event={sampleEvent} />, container)
  })
  testStructureSecondPart()
})
