// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import AboutHeader from './AboutHeader'

const information_containers: string = `
{
    "information" : [
        {
            "title": "How it all began",
            "text_content": "In 2015, four students organized themselves to compete in the national robotics tournament of Mexico, called TMR. They achieved the pass for the international by gaining 1st place in the category Rescue Maze. Astonished by the different tech levels of other countries, they started RoBorregos, with the intention of sharing this knowledge and experiences through generations."
        },
        {
            "title": "What we develop for",
            "text_content": "Our vision is to become, in the next decade, the best robotics team in Latin America, in national and international competitions for university students and be able to promote technological development in Mexico."
        }
    ]
}`

const { information } = JSON.parse(information_containers)

function textToHTML(textToProbe: string) {
  const span = document.createElement('span')
  span.innerHTML = textToProbe
  return span.textContent || span.innerText
}

const checkHomeInformation = () => {
  const information_container = document.querySelector('[test-id="1"]')
  if (information_container != null) {
    expect(information_container.children).toHaveLength(2)
    for (let childrenIndex = 0; childrenIndex < 2; childrenIndex += 1) {
      expect(information_container.children[childrenIndex].children).toHaveLength(2)
    }
  } else {
    expect(information_container).not.toEqual(null)
  }
}

const checkHomeInformationContainers = () => {
  for (let counter = 2; counter <= 3; counter += 1) {
    const information_container = document.querySelector(`[test-id="${counter}"]`)
    if (information_container != null) {
      expect(information_container.children).toHaveLength(2)
      expect(information_container.children[0].textContent).toEqual(
        textToHTML(information[counter - 2].title),
      )
      expect(information_container.children[1].textContent).toEqual(
        textToHTML(information[counter - 2].text_content),
      )
    } else {
      expect(information_container).not.toEqual(null)
    }
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

it('<AboutHeader> Renders correctly checking the data', () => {
  act(() => {
    render(<AboutHeader />, container)
  })
})

it('Checking if the structure is correctly', () => {
  act(() => {
    render(<AboutHeader />, container)
  })
  checkHomeInformation()
})

it('Checking that the information is complete', () => {
  act(() => {
    render(<AboutHeader />, container)
  })
  checkHomeInformationContainers()
})
