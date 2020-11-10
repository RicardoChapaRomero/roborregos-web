// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import HomeInformation from './HomeInformation'

const information_containers: string = `
{
    "information" : [
        {
            "id": "competitions",
            "title": "High-Performance Team",
            "text_content": "We participate in different national and international competitions for autonomous robots such as Mexico&apos;s TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, we want to demonstrate the potential of Mexico in the development and innovation&nbsp;of&nbsp;technology."
        },
        {
            "id": "social",
            "title": "Social Projects",
            "text_content": "We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had that&nbsp;inspire&nbsp;us."
        },
        {
            "id": "events",
            "title": "Events & Outreach",
            "text_content": "We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and&nbsp;many&nbsp;more."
        },
        {
            "id": "students",
            "title": "Student Community",
            "text_content": "To reach our community, we give free workshops about useful technologies such as: ROS, Git and Machine Learning, as well as our annual biggest event: Candidates, where the team gives weekly classes of basic programming, mechanics and electronics for anyone in the university interested, and organize a robotics tournament to get new&nbsp;members."
        }
    ]
}`

function textToHTML(textToProbe: string) {
  const span = document.createElement('span')
  span.innerHTML = textToProbe
  return span.textContent || span.innerText
}

const { information } = JSON.parse(information_containers)

const checkHomeInformation = () => {
  const information_container = document.querySelector('[test-id="1"]')
  if (information_container != null) {
    expect(information_container.children).toHaveLength(4)
    for (let childrenIndex = 0; childrenIndex < 4; childrenIndex += 1) {
      expect(information_container.children[childrenIndex].getAttribute('id')).toEqual(information[childrenIndex].id)
      expect(information_container.children[childrenIndex].children).toHaveLength(1)
      const home_information_container = information_container.children[childrenIndex].children[0]
      expect(home_information_container.children).toHaveLength(2)
      expect(home_information_container.children[1].children).toHaveLength(2)
      expect(home_information_container.children[1].children[0].textContent).toEqual(
        information[childrenIndex].title,
      )
      expect((home_information_container.children[1].children[1].textContent)).toEqual(
        textToHTML(information[childrenIndex].text_content),
      )
    }
  } else {
    expect(information_container).not.toEqual(null)
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

it('<HomeInformation> Renders correctly checking the data', () => {
  act(() => {
    render(<HomeInformation />, container)
  })

  checkHomeInformation()
})
