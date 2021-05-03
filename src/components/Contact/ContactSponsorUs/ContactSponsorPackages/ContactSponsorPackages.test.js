// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ContactSponsorPackages from './ContactSponsorPackages'

type BenefitsType = {
  es: string,
  en: string
};

type PackageType = {
  name: string,
  benefits: Array<BenefitsType>
};

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

const languages: Array<string> = ['en', 'es']

const { packages } = JSON.parse(packages_text)

const checkPackagesRendering = (language: string) => {
  packages.forEach((current_package: PackageType, index: number) => {
    const rendered_package = document.querySelector(`[test-id="${index}"]`)
    if (rendered_package != null) {
      expect(rendered_package.children).toHaveLength(1)
      expect(rendered_package.children[0].children).toHaveLength(1)
      expect(rendered_package.children[0].children[0].children)
        .toHaveLength(3 + current_package.benefits.length)
      const package_containers = rendered_package.children[0].children[0].children

      expect(package_containers[0].textContent).toBe(current_package.name)
      current_package.benefits.forEach((current_benefit: BenefitsType, benefit_index: number) => {
        const rendered_benefit = package_containers[2 + benefit_index]
        expect(rendered_benefit.children).toHaveLength(2)
        expect(rendered_benefit.children[1].textContent).toBe(language === 'en' ? current_benefit.en : current_benefit.es)
      })
    } else {
      expect(rendered_package).not.toEqual(null)
    }
  })
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

it('<ContactSponsorPackages> Renders correctly change of language', () => {
  act(() => {
    render(<ContactSponsorPackages packages={packages} language={languages[0]} />, container)
  })

  checkPackagesRendering(languages[0])

  act(() => {
    render(<ContactSponsorPackages packages={packages} language={languages[1]} />, container)
  })

  checkPackagesRendering(languages[1])

  act(() => {
    render(<ContactSponsorPackages packages={packages} language={languages[0]} />, container)
  })

  checkPackagesRendering(languages[0])
})
