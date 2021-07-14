// @flow
import React, { useState, useEffect } from 'react'
import './SupportUsTypes.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Fade from '@material-ui/core/Fade'
import donate from '../../../images/supportUs/donate.jpg'
import sponsorship from '../../../images/supportUs/sponsorship.jpg'
import gifts from '../../../images/supportUs/gifts.jpg'

type Props = {
  language: number
};

function SupportUsTypes({ language }: Props) {
  const supportUsTypes = [
    {
      title: ['Donación', 'Donate'],
      description: ['¡Dando un monto anónimamente puedes proporcionarnos los recursos para desarrollar tecnología e ir a competir! ¡Da click aquí!',
        'By donating anonymously you can provide us with the necessary resources to develop technology and compete! Click here!'],
      img: donate,
      color: '#CB6CE6',
      link: 'https://catalogodeservicios.itesm.mx/',
    },
    {
      title: ['Patrocinio', 'Sponsorship'],
      description: ['¡Ayúdanos a desarrollar robots y competir, mostrando el nombre de tu empresa en nuestras camisas!',
        'Help us develop robots and compete by collaborating with us, showing your company name on our shirts!'],
      img: sponsorship,
      color: '#FFDE59',
      link: '',
    },
    {
      title: ['Especie', 'In-Kind'],
      description: ['Desde boletos de avión hasta materiales mecánicos, estos bienes y servicios son vitales para desarrollar nuevas tecnologías.',
        'From airline tickets to mechanical materials, these goods and services are vital for developing new technologies.'],
      img: gifts,
      color: '#FF914D',
      link: '',
    },
  ]

  const button_description = ['Ver paquetes', 'See packages']

  /**
  Function to scroll down the window view towards the sponsor packages.
  */
  const scrollToPackages = () => {
    window.scrollBy(0, window.innerHeight * 2 - (85 * 1) - window.scrollY)
  }

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.innerHeight / 2 < window.scrollY)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [visible])

  return (
    <div className="supportUs-container">
      {(visible || window.innerWidth < 992) ? (
        <>
          <Row className="supportUs-types">
            {
          supportUsTypes.map((support_type, index) => (
            <Fade in {...{ timeout: 1500 }}>
              <Col
                lg={4}
                xs={12}
                className="type-container"
                // TODO: make "gifts" link to new ContactUs form
                onClick={() => ((!index) ? window.open(support_type.link) : scrollToPackages())}
              >
                <Row>
                  <Col lg={{ span: 12, order: 'first' }} xs={{ order: index % 2, span: 6 }}>
                    <Row>
                      <img src={support_type.img} alt="not found" className="supportUs-image" />
                    </Row>
                    <Row style={{ color: support_type.color }} className="supportUs-title">
                      {support_type.title[language]}
                    </Row>
                  </Col>
                  <Col lg={12} xs={6} className="supportUs-description">
                    {support_type.description[language]}
                  </Col>
                </Row>
              </Col>
            </Fade>
          ))
        }
          </Row>
          <Fade in {...{ timeout: 1500 }}>
            <div className="see-packages-button">
              <p>
                {button_description[language]}
              </p>
              <FontAwesomeIcon
                onClick={scrollToPackages}
                icon={faAngleDown}
                className="see-packages-icon"
              />
            </div>
          </Fade>
        </>
      ) : (null)}
    </div>
  )
}

export default SupportUsTypes
