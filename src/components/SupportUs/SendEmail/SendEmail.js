// @flow
import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import './SendEmail.css'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'

type Props = {
  language: number
};

const FormTextField = withStyles({
  root: {
    '& input:valid:focus + fieldset': {
      borderColor: '#6A2C94',
    },
    '& .MuiTextField-root': {
      borderColor: '#6A2C94',
    },
    '& .MuiInputLabel-root': {
      color: '#6A2C94',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      height: '9vh',
      '& fieldset': {
        borderColor: '#6A2C94',
      },
      '&:hover fieldset': {
        borderColor: '#6A2C94',
      },
    },
  },
})(TextField)

const MultipleLineFormTextField = withStyles({
  root: {
    '& input:valid:focus + fieldset': {
      borderColor: '#6A2C94',
    },
    '& .MuiTextField-root': {
      borderColor: '#6A2C94',
    },
    '&:valid:focus + fieldset': {
      borderColor: '#6A2C94',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      '& fieldset': {
        borderColor: '#6A2C94',
      },
      '&:hover fieldset': {
        borderColor: '#6A2C94',
      },
    },
  },
})(TextField)

const SendCopyCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#6A2C94',
    },
  },
  checked: {},
})(Checkbox)

function SendEmail({ language }: Props) {
  const title_send_email = ['Con tu ayuda podemos llegar más lejos.', 'With your help we can achieve more.']

  const forms = [
    ['¡Contáctanos!', 'Get in touch!'],
    ['Nombre', 'Name'],
    'Email',
    ['Teléfono', 'Phone'],
    ['Mensaje', 'Your message'],
    ['Enviar copia a mi correo', 'Send a copy to my email'],
    ['Enviar', 'Send'],
  ]

  const helperText = ['Favor de llenar este campo', 'Please fill this textfield']
  const paddingError = ['0vh', '3.3vh']

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sendCopy, setCopy] = useState(false)
  const [error, setError] = useState([false, false, false, false])

  const handleChangeName = (event) => {
    setName(event.target.value)
    if (event.target.value !== '') {
      error[0] = false
      setError(error)
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
    if (event.target.value !== '') {
      error[1] = false
      setError(error)
    }
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
    if (event.target.value !== '') {
      error[2] = false
      setError(error)
    }
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value)
    if (event.target.value !== '') {
      error[3] = false
      setError(error)
    }
  }

  const handleChangeCheckBox = (event) => {
    setCopy(event.target.checked)
  }

  const createMail = () => {
    const emailBody = `Name: ${name}\n
      Phone number: ${phone}\n
      Email: ${email}\n
      ${message}`
    return ({
      message: emailBody,
      from_name: name,
      reply_to: email,
      send_copy: sendCopy,
    })
  }

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (name !== '' && email !== '' && phone !== '' && message !== '') {
      const mailParams = createMail()
      // TODO: Send email
      // eslint-disable-next-line no-alert
      alert(`Thanks for your interest! \nCheck your Tec email \n${mailParams.message}`)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setCopy(false)
    } else {
      const errors = [false, false, false]
      if (name === '') { errors[0] = true }
      if (email === '') { errors[1] = true }
      if (phone === '') { errors[2] = true }
      if (message === '') { errors[3] = true }
      setError(errors)
    }
  }

  return (
    <Row id="send-email">
      <Col xs="12" md="6" className="send-email-phrase">
        <div className="big-letters-title">
          {title_send_email[language]}
        </div>
      </Col>
      <Col xs="12" md="6" className="send-email-form">
        <div className="form-container">
          <Row className="send-email-title">
            {forms[0][language]}
          </Row>
          <Row style={{ paddingBottom: error[0] ? paddingError[0] : paddingError[1] }}>
            <FormTextField
              variant="outlined"
              label={forms[1][language]}
              onChange={handleChangeName}
              fullWidth
              value={name}
              error={error[0]}
              helperText={error[0] ? helperText[language] : ''}
            />
          </Row>
          <Row style={{ paddingBottom: error[1] ? paddingError[0] : paddingError[1] }}>
            <FormTextField
              label="Email"
              variant="outlined"
              onChange={handleChangeEmail}
              fullWidth
              value={email}
              error={error[1]}
              helperText={error[1] ? helperText[language] : ''}
            />
          </Row>
          <Row style={{ paddingBottom: error[2] ? paddingError[0] : paddingError[1] }}>
            <FormTextField
              label={forms[3][language]}
              variant="outlined"
              onChange={handleChangePhone}
              fullWidth
              className="SelectOptionsDropDown"
              value={phone}
              error={error[2]}
              helperText={error[2] ? helperText[language] : ''}
            />
          </Row>
          <Row style={{ paddingBottom: error[3] ? paddingError[0] : paddingError[1] }}>
            <MultipleLineFormTextField
              multiline
              rows={4}
              variant="outlined"
              placeholder={forms[4][language]}
              onChange={handleChangeMessage}
              fullWidth
              value={message}
              error={error[3]}
              helperText={error[3] ? helperText[language] : ''}
            />
          </Row>
          <Row>
            <SendCopyCheckbox
              onChange={handleChangeCheckBox}
              checked={sendCopy}
            />
            <div className="checkbox-description">
              {forms[5][language]}
            </div>
          </Row>
          <Row className="mt-4 mb-1 justify-content-center">
            <Button
              className="mr-4 col-3 join form-button-submit"
              type="submit"
              value="submit"
              onClick={handleSubmit}
            >
              {forms[6][language]}
            </Button>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default SendEmail
