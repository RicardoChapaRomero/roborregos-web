// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { fireEvent } from '@testing-library/react'

import ContactSponsorUs from './ContactSponsorUs'

type State = {
  language: string,
  translate_label: string,
  sponsor_button_label: string,
  title: Array<string>
};

const english_state: State = {
  language: 'en',
  translate_label: 'Traducir a español',
  sponsor_button_label: 'Sponsor us!',
  title: ['Would you like to support RoBorregos?', 'Join our sponsors team!'],
}

const spanish_state: State = {
  language: 'es',
  translate_label: 'Translate to english',
  sponsor_button_label: '¡Patrocinanos!',
  title: ['¿Te gustaría apoyar a RoBorregos?', '¡Sé uno de nuestros patrocinadores!'],
}

const packages_text: string = `
{
  "packages" : [
    {
      "name" : "Jumper",
      "benefits" : [
        {
          "es": "6 menciones genéricas en redes sociales (u/c bimestre)",
          "en": "6 generic mentions in social networks (bimonthly)"
        },
        {
          "es": "Invitación a eventos y newsletters",
          "en": "Invitation to events and newsletters"
        },
        {
          "es": "2 publicaciones personalizadas en Facebook (u/c semestre)",
          "en": "2 personalized posts on Facebook (biannual)"
        }
      ]
    },
    {
      "name" : "Led",
      "benefits" : [
        {
          "es": "12 menciones genéricas en redes sociales (u/c mes)",
          "en": "12 generic mentions in social networks (monthly)"
        },
        {
          "es": "2 publicaciones personalizadas en Facebook (u/c semestre)",
          "en": "2 personalized posts on Facebook (biannual)"
        }
      ]
    },
    {
      "name" : "ThirdSuperName",
      "benefits" : [
        {
          "es": "12 menciones genéricas en redes sociales (u/c mes)",
          "en": "12 generic mentions in social networks (monthly)"
        }
      ]
    }
  ]
}`

const { packages } = JSON.parse(packages_text)
const url_contact = 'www.google.com'
let wrapper

const checkState = (language: string) => {
  expect(wrapper.state.language).toEqual(language === 'es' ? spanish_state.language : english_state.language)
  expect(wrapper.state.translate_label).toEqual(language === 'es' ? spanish_state.translate_label : english_state.translate_label)
  expect(wrapper.state.sponsor_button_label).toEqual(language === 'es' ? spanish_state.sponsor_button_label : english_state.sponsor_button_label)
  expect(wrapper.state.title[0]).toEqual(language === 'es' ? spanish_state.title[0] : english_state.title[0])
  expect(wrapper.state.title[1]).toEqual(language === 'es' ? spanish_state.title[1] : english_state.title[1])
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

it('<ContactSponsorUs> Renders correctly and opens contact tab', () => {
  window.open = jest.fn()
  act(() => {
    render(<ContactSponsorUs packages={packages} url_contact={url_contact} />, container)
  })

  const sponsor_button = document.querySelector('[test-id="sponsor-button"]')
  if (sponsor_button != null) {
    fireEvent(sponsor_button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(window.open).toBeCalledWith(url_contact, '_blank')
  } else {
    expect(sponsor_button).not.toEqual(null)
  }
})

it('<ContactSponsorUs> Renders correctly and translates the data', () => {
  act(() => {
    wrapper = render(<ContactSponsorUs packages={packages} url_contact={url_contact} />, container)
  })

  const translate_button = document.querySelector('[test-id="translate-button"]')
  if (translate_button != null) {
    checkState('en')

    fireEvent(translate_button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    checkState('es')

    fireEvent(translate_button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    checkState('en')
  } else {
    expect(translate_button).not.toEqual(null)
  }
})
