// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import 'intersection-observer'

import AboutTimeline from './AboutTimeline'

const information_timeline: string = `
{
    "events": [
      {
        "date": "March 2020",
        "img_path": "35.png",
        "title": "Covid-19 Response",
        "description": "Unfortunately, both the TMR and Robocup Jr. were cancelled for this year, yet we continued working, creating online courses and webinars webinars as well as participating in different tech events."
      },
      {
        "date": "February 2020",
        "img_path": "29.jpg",
        "title": "Regional 2020",
        "description": "Diego, Emérico, Marlon and Grecia won 2nd place in Rescue Maze and Keven, Gabriela y Karyme won 3rd place in Soccer Open."
      },
      {
        "date": "December 2019",
        "img_path": "34.jpg",
        "title": "First committee of Sponsorships and Networking",
        "description": "A new position in the team opened for students to collaborate in the logistics of sponsorships and networking, as well as social media and image; The opportunity opened for any student of Tec de Monterrey to help us have a more multidisciplinary integration."
      },
      {
        "date": "December 2019",
        "img_path": "23.jpg",
        "title": "1st Gen Grad",
        "description": "Founders Diego, Emilio, Gerardo and Sebastian graduated."
      },
      {
        "date": "October 2019",
        "img_path": "33.jpeg",
        "title": "LARC OPEN 2019",
        "description": "During the semester, a robot was developed for the LARC IEEE competition, Open category. The robot consisted of an autonomous car with a mechanism to grab metal blocks by means of electromagnets, along with a navigation and vision system to be able to leave the blocks in their corresponding places. In the end, we could not attend due to economic issues."
      },
       {
        "date": "July 2019",
        "img_path": "31.jpg",
        "title": "Australia",
        "description": "Arath, Aldo, Jamir and Mauricio obtained the “Best Hardware Solution” award in the RoboCup Jr. Rescue Maze, Sydney Australia."
      },
      {
        "date": "March 2019",
        "img_path": "22.jpg",
        "title": "TMR 2019",
        "description": "Arath, Aldo, Jamir y Juan Carlos won 1st place in Rescue Maze Category."
      },
      {
        "date": "February 2019",
        "img_path": "21.jpg",
        "title": "Regional 2019",
        "description": "Amin, Chapa, Pasquel and Omar won 1st place in Soccer Light Category."
      },
      {
        "date": "January 2019",
        "img_path": "28.jpg",
        "title": "Formalization of @Home",
        "description": "The RoBorregos’ @HOME team was formalized. The team was divided into different technology areas, integrating voice recognition, natural language processing and computer vision with neural networks, navigation, control and mechanical and structural design."
      },
      {
        "date": "October 2018",
        "img_path": "19.jpg",
        "title": "LARC 2018",
        "description": "1st place in Latin American and Brazilian Competition IEEE Open Challenge won by Alexis, Antonio, Ivan, Mariano, and Osvaldo. The robot consisted of an autonomous car with a mechanism to grab metal blocks with magnets, along with a navigation and vision system to be able to leave the blocks in their corresponding places."
      },
      {
        "date": "June 2018",
        "img_path": "18.jpg",
        "title": "Canada",
        "description": "Alberto, Greg and Iqui were the first ones to participate in Soccer Open internationally and Jahuey, Itzeld, Osorio and Yulisa participated in Rescue Maze in Montreal, Canada."
      },
      {
        "date": "March 2018",
        "img_path": "16.3.jpg",
        "title": "TMR 2018 DRONES",
        "description": "Alex Garza, Aurora Tijerina, Cristian Bentin and Paul Vazquez won 3rd and was the first time participating in Autonomous Drones Advanced Category, at Tec of Monterrey, Campus Monterrey."
      },
      {
        "date": "March 2018",
        "img_path": "16.jpg",
        "title": "TMR 2018",
        "description": "Alberto Jahuey, Itzel López, Ricardo Osorio and Yulisa Farron won 1st Place in Rescue Maze; Alberto López, Greg Espinosa, and Iqui Balam won 2nd in Soccer Open; Eric Uriel, Jesus Anaya, Isaac, Monica Nava and Roberto Galindo won 3rd in Soccer Light."
      },
      {
        "date": "October 2017",
        "img_path": "15.jpg",
        "title": "LARC 2017",
        "description": "Alex, Cardozo, Clara, Emilio, Javier and Nestor won 3rd place by a difference of 2pts."
      },
      {
        "date": "July 2017",
        "img_path": "12.jpg",
        "title": "Japan",
        "description": "Placing Mexico for the first time in the podium, Tomas, Alexis, Esquer and Ernesto won 3rd place in RoboCup Jr. Rescue Maze, Nagoya, Japan."
      },
      {
        "date": "March 2017",
        "img_path": "10.jpg",
        "title": "TMR 2017",
        "description": "Tomas, Esquer and Bernardo won 1st and Mariano, Alexis, Ernesto and Osvaldo won 2nd place in Rescue Maze."
      },
      {
        "date": "February 2017",
        "img_path": "9.jpg",
        "title": "Regional 2017",
        "description": "Tomas, Esquer, and Bernardo won 1st place in Rescue Maze. Angel, Ernesto, Gabriela, Ivan and Paul won 3rd place in Soccer Open and Cinthia, Aurora, Ana, Arcelia and Greg won 3rd in Soccer Light."
      },
      {
        "date": "October 2016",
        "img_path": "8.jpg",
        "title": "LARC 2016",
        "description": "Diego, Clara, Emilio, Gerardo and Sebastián won 2nd Place in Latin American and Brazilian Competition IEEE Open Challenge. "
      },
      {
        "date": "July 2016",
        "img_path": "6.jpg",
        "title": "Germany",
        "description": "Javier, Alex, Nestor and Cristian participated in RoboCup Rescue Maze."
      },
      {
        "date": "March 2016",
        "img_path": "4.5.jpg",
        "title": "TMR 2016",
        "description": "1st and 2nd Place in Rescue Maze TMR 2016, Ciudad Victoria, Tamaulipas, by Javier, Alex, Nestor, Christian, and Tomas, Diego, Enrique, Isabela and Melissa."
      },
      {
        "date": "February 2016",
        "img_path": "30.jpg",
        "title": "Regional 2016 ",
        "description": "Javier, Alex, Nestor and Christian won 1st Place in Rescue Maze Regional. Cinthia, Eduardo, Cardozo and Ian won 1st in Soccer Open."
      },
      {
        "date": "August 2015",
        "img_path": "3.jpg",
        "title": "Team Foundation",
        "description": "Team founders decided to create a program to teach the basics of robotics to Tec freshmen and then have an internal competition to find the best fit for the team. This event has become our annual “Candidates”."
      },
      {
        "date": "July 2015",
        "img_path": "2.jpg",
        "title": "First International",
        "description": "Diego, Emilio, Gerardo y Sebastián were the first to place Mexico in the Top 10 in RoboCup Jr. Rescue Maze in Hefei, China."
      },
      {
        "date": "March 2015",
        "img_path": "1.jpg",
        "title": "First Step",
        "description": "Diego, Emilio, Gerardo y Sebastián won first place in Rescue Maze at TMR 2015, Mexico City."
      }
    ]
}
`

const { events } = JSON.parse(information_timeline)

const checkStructureTimeline = () => {
  const timeline_container = document.querySelector('[test-id="1"]')
  if (timeline_container != null) {
    expect(timeline_container.children).toHaveLength(1)
    expect(timeline_container.children[0].children).toHaveLength(2)
    expect(timeline_container.children[0].children[1].children).toHaveLength(events.length)
    expect(timeline_container.children[0].children[0].children).toHaveLength(1)
  } else {
    expect(timeline_container).not.toEqual(null)
  }
}

const checkImageProperties = (element: HTMLElement, index: number) => {
  if (element != null) {
    expect(element.children).toHaveLength(2)
    expect(element.children[0].getAttribute('src')).toEqual(
      'placeholder-rectangle.png',
    )
    expect(element.children[1].children).toHaveLength(1)
    expect(element.children[1].children[0].textContent).toEqual(
      events[index].title,
    )
  } else {
    expect(element).not.toEqual(null)
  }
}

const testAnEventElement = (element: HTMLElement, index: number) => {
  if (element != null) {
    expect(element.children).toHaveLength(2)
    expect(element.children[1].children).toHaveLength(4)
    checkImageProperties(element.children[1].children[1], index)
    expect(element.children[1].children[2].children).toHaveLength(1)
    expect(element.children[1].children[2].children[0].children).toHaveLength(2)
    expect(element.children[1].children[2].children[0].children[0].textContent).toEqual(
      events[index].title,
    )
    expect(element.children[1].children[2].children[0].children[1].textContent).toEqual(
      events[index].description,
    )
  } else {
    expect(element).not.toEqual(null)
  }
}

const checkInformationTimeline = () => {
  const timeline_container = document.querySelector('[test-id="1"]')
  if (timeline_container != null) {
    for (let eventIndex = 0; eventIndex < events.length; eventIndex += 1) {
      const element = timeline_container.children[0].children[1].children[eventIndex]
      testAnEventElement(element, eventIndex)
    }
  } else {
    expect(timeline_container).not.toEqual(null)
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

it('<AboutTimeline> Renders correctly', () => {
  act(() => {
    render(<AboutTimeline events={events} />, container)
  })
})

it('<AboutTimeline> Structure is correctly', () => {
  act(() => {
    render(<AboutTimeline events={events} />, container)
  })
  checkStructureTimeline()
})

it('<AboutTimeline> Information matches the JSON information', () => {
  act(() => {
    render(<AboutTimeline events={events} />, container)
  })
  checkInformationTimeline()
})
