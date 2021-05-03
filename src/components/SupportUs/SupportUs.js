// @flow
import React, { useState } from 'react'
import SponsorPackages from './SponsorPackages/SponsorPackages'
import SupportUsCompetitions from './SupportUsCompetitions/SupportUsCompetitions'
import HeaderBanner from '../Shared/HeaderBanner/HeaderBanner'
import SupportUsTypes from './SupportUsTypes/SupportUsTypes'
import SendEmail from './SendEmail/SendEmail'
import './SupportUs.css'

const Contact = () => {
  const headerTitle = ['Apóyanos', 'Support us']
  const headerMainText = [['Te gustaría apoyarnos? Colabora con nosotros!'], ['Would you like to support RoBorregos? Let’s collaborate!']]
  const headerSubText = [['Ver más'], ['Learn More']]
  const buttonText = ['Contáctanos', 'Contact Us!']

  document.title = 'RoBorregos | Support us'

  const [language, setLanguage] = useState(1)

  return (
    <>
      <HeaderBanner
        title={headerTitle[language]}
        mainText={headerMainText[language]}
        subText={headerSubText[language]}
        bgColorScheme={{ primary: '#6A2C94E6', secondary: '#141213E6' }}
        iconColorScheme={{ primary: '#6A2C94', secondary: '#CB6CE6' }}
        additionalButton={{
          text: buttonText[language],
          bgColor: '#000000',
          borderColor: '#CB6CE6',
          onClick() {
            const forms = document.getElementById('send-email')
            if (forms !== null) {
              forms.scrollIntoView({ block: 'end' })
            }
          },
        }}
      />
      <button
        type="button"
        onClick={() => setLanguage(!language ? 1 : 0)}
        className="button-sticky-language"
      >
        ES/EN
      </button>
      <SupportUsTypes language={language} />
      <SponsorPackages language={language ? 'en' : 'es'} />
      <SendEmail language={language} />
      <SupportUsCompetitions language={language} />
    </>
  )
}

export default Contact
