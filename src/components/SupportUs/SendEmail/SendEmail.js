// @flow
import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import './SendEmail.css'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormsSnackBar from '../../Shared/FormsSnackBar/FormsSnackbar'
import { sendContactUsEmail } from '../../../scripts/apiScripts'

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
  const recaptchaRef = React.createRef()

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

  const submitMessages = [['¡Gracias por contactarnos! Responderemos lo más pronto posible.', "Thanks for reaching out! We'll be in contact soon."],
    ['Hubo un error al enviar, intente más tarde.', 'Something went wrong! Please try later.'],
  ]

  const helperText = ['Favor de llenar este campo', 'Please fill this textfield']
  const paddingError = ['0vh', '3.3vh']

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sendCopy, setCopy] = useState(false)
  const [formError, setError] = useState([false, false, false, false])
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('success')
  const [messageSnackbar, setMessageSnackbar] = useState(0)

  const handleChangeName = (event) => {
    setName(event.target.value)
    if (event.target.value !== '') {
      formError[0] = false
      setError(formError)
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
    if (event.target.value !== '') {
      formError[1] = false
      setError(formError)
    }
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
    if (event.target.value !== '') {
      formError[2] = false
      setError(formError)
    }
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value)
    if (event.target.value !== '') {
      formError[3] = false
      setError(formError)
    }
  }

  const handleChangeCheckBox = (event) => {
    setCopy(event.target.checked)
  }

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      setOpen(false)
    }
  }

  const createMail = (recaptchaKey: string) => {
    const emailBody = `Name: ${name}\n
      Phone number: ${phone}\n
      Email: ${email}\n
      ${message}`
    return ({
      message: emailBody,
      from_name: name,
      reply_to: email,
      send_copy: sendCopy,
      recaptchaKey,
    })
  }

  const handleSubmit = (recaptchaKey: string) => {
    if (name !== '' && email !== '' && phone !== '' && message !== '') {
      const mailParams = createMail(recaptchaKey)
      setIsLoading(true)
      sendContactUsEmail(mailParams).then((result) => {
        if (result.status === 200) {
          setName('')
          setEmail('')
          setPhone('')
          setMessage('')
          setCopy(false)
          setError([false, false, false, false])
          setOpen(true)
          setSeverity('success')
          setMessageSnackbar(0)
        } else {
          setOpen(true)
          setSeverity('error')
          setMessageSnackbar(1)
          throw new Error('Something went wrong! \nEmail-Server Error, Retry Later')
        }
      }, (error) => {
        setOpen(true)
        setSeverity('error')
        setMessageSnackbar(1)
        throw new Error(`Something went wrong! \n${error.message}`)
      }).finally(() => {
        setIsLoading(false)
      })
    } else {
      const errors = [false, false, false]
      if (name === '') { errors[0] = true }
      if (email === '') { errors[1] = true }
      if (phone === '') { errors[2] = true }
      if (message === '') { errors[3] = true }
      setError(errors)
    }
  }

  const handleReCaptcha = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const recaptcha_ref = recaptchaRef.current
    // $FlowFixMe[incompatible-use]
    recaptcha_ref.reset()
    // $FlowFixMe[incompatible-use]
    recaptcha_ref.execute()
  }

  return (
    <>
      <Row id="send-email">
        <Col xs="12" md="6" className="send-email-phrase">
          <div className="big-letters-title">
            {title_send_email[language]}
          </div>
        </Col>
        <Col xs="12" md="6" className="send-email-form position-relative">
          <div className={`form-container ${isLoading ? 'formLoading' : ''}`}>
            <Row className="send-email-title">
              {forms[0][language]}
            </Row>
            <Row style={{ paddingBottom: formError[0] ? paddingError[0] : paddingError[1] }}>
              <FormTextField
                variant="outlined"
                label={forms[1][language]}
                onChange={handleChangeName}
                fullWidth
                value={name}
                error={formError[0]}
                disabled={isLoading}
                helperText={formError[0] ? helperText[language] : ''}
              />
            </Row>
            <Row style={{ paddingBottom: formError[1] ? paddingError[0] : paddingError[1] }}>
              <FormTextField
                label="Email"
                variant="outlined"
                onChange={handleChangeEmail}
                fullWidth
                value={email}
                error={formError[1]}
                disabled={isLoading}
                helperText={formError[1] ? helperText[language] : ''}
              />
            </Row>
            <Row style={{ paddingBottom: formError[2] ? paddingError[0] : paddingError[1] }}>
              <FormTextField
                label={forms[3][language]}
                variant="outlined"
                onChange={handleChangePhone}
                fullWidth
                className="SelectOptionsDropDown"
                value={phone}
                error={formError[2]}
                disabled={isLoading}
                helperText={formError[2] ? helperText[language] : ''}
              />
            </Row>
            <Row style={{ paddingBottom: formError[3] ? paddingError[0] : paddingError[1] }}>
              <MultipleLineFormTextField
                multiline
                rows={4}
                variant="outlined"
                placeholder={forms[4][language]}
                onChange={handleChangeMessage}
                fullWidth
                value={message}
                error={formError[3]}
                disabled={isLoading}
                helperText={formError[3] ? helperText[language] : ''}
              />
            </Row>
            <Row>
              <SendCopyCheckbox
                onChange={handleChangeCheckBox}
                checked={sendCopy}
                disabled={isLoading}
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
                disabled={isLoading}
                onClick={handleReCaptcha}
              >
                {forms[6][language]}
              </Button>
            </Row>
          </div>
          <div className={`loadingSymbol ${isLoading ? '' : 'd-none'}`}>
            <svg className="spinSymbol" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </Col>
      </Row>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA}
        className="d-none"
        onChange={handleSubmit}
      />
      <FormsSnackBar
        message={submitMessages[messageSnackbar][language]}
        open_snackbar={open}
        severity={severity}
        handleClose={handleClose}
      />
    </>
  )
}

export default SendEmail
