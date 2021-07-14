// @flow
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Form, FormGroup, Label, Input, Row, Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap'
import { sendJoinUsEmail } from '../../../../../scripts/apiScripts'
import './FormsModal.css'
import FormsSnackBar from '../../../../Shared/FormsSnackBar/FormsSnackbar'

type SelectedPosition = {
  title: string
};

type Props = {
  selectedPosition: SelectedPosition,
  isOpen: boolean,
  trySubmit: boolean,
  toggle: () => void,
  onSubmit: () => void
};

function FormsModal(props: Props) {
  const {
    selectedPosition, isOpen, toggle, onSubmit, trySubmit,
  } = props
  const recaptchaRef = React.createRef()
  const greeting = `Join us as ${selectedPosition.title}!`

  const [name, setName] = useState('')
  const [career, setCareer] = useState('')
  const [semester, setSemester] = useState('1')
  const [matricualtionNumber, setMatricualtionNumber] = useState('')
  const [comments, setComments] = useState('')
  const [isLoading, setIsLoading] = useState('')
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('success')

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      setOpen(false)
    }
  }

  const createMail = (recaptchaKey: string) => {
    const emailBody = `Hola soy ${name}
      estudiante de ${career} de ${semester} semestre. \n
      ${comments}`
    return ({
      message: emailBody,
      from_name: name,
      reply_to: `${matricualtionNumber}@itesm.mx`,
      position: selectedPosition.title,
      recaptchaKey,
    })
  }

  const handleSubmit = (recaptchaKey: string) => {
    onSubmit()
    if (name && career && semester
      && matricualtionNumber && comments) {
      const mailParams = createMail(recaptchaKey)
      setIsLoading(true)
      sendJoinUsEmail(mailParams).then((result) => {
        if (result.status === 200) {
          setOpen(true)
          setMessage('Thanks for your interest! Check your Tec email.')
          setSeverity('success')
        } else {
          setOpen(true)
          setMessage('Something went wrong! Please retry later')
          setSeverity('error')
        }
        setName('')
        setCareer('')
        setSemester('')
        setMatricualtionNumber('')
        setComments('')
      }, (error) => {
        setOpen(true)
        setMessage('Something went wrong! Please retry later')
        setSeverity('error')
        throw new Error(`Something went wrong! \n${error.message}`)
      }).finally(() => {
        setIsLoading(false)
        toggle()
      })
    } else {
      setOpen(true)
      setMessage('Please complete all fields')
      setSeverity('error')
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

  const getError = () => {
    if (trySubmit && name && career && semester
      && matricualtionNumber && comments
        && (!name || !career || !semester
        || !matricualtionNumber || !comments)) {
      return (
        <Row className="mt-4 mb-1 justify-content-center">
          <p className="text-danger"> Please fill out the entire forms</p>
        </Row>
      )
    }
    return null
  }

  return (
    <>
      <Modal id="candidates-join-modal" isOpen={isOpen} toggle={toggle} className="position-relative">
        <ModalHeader toggle={toggle}>
          {' '}
          { greeting }
        </ModalHeader>
        <ModalBody>
          <Form className={isLoading ? 'formLoading' : ''}>
            <Row>
              <FormGroup className="col-md-6">
                <Label>Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Juanito"
                  disabled={isLoading}
                  onChange={(input) => { setName(input.target.value) }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Matriculation Number</Label>
                <Input
                  type="text"
                  id="matricualtionNumber"
                  placeholder="A01283070"
                  disabled={isLoading}
                  onChange={(input) => { setMatricualtionNumber(input.target.value) }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Career</Label>
                <Input
                  type="text"
                  id="career"
                  placeholder="IMT"
                  disabled={isLoading}
                  onChange={(input) => { setCareer(input.target.value) }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Semester</Label>
                <Input
                  type="select"
                  id="semester"
                  disabled={isLoading}
                  onChange={(input) => { setSemester(input.target.value) }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9+</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-12">
                <Label>Tell us about you</Label>
                <Input
                  type="textarea"
                  id="comments"
                  disabled={isLoading}
                  placeholder="Why you want to join the team?"
                  onChange={(input) => { setComments(input.target.value) }}
                />
              </FormGroup>
            </Row>
            <>
              {getError()}
              {' '}
            </>
            <Row className="mt-4 mb-1 justify-content-center">
              <Button className="mr-4 col-3 join" type="button" onClick={handleReCaptcha} disabled={isLoading}>Join!</Button>
            </Row>
          </Form>
          <div className={`loadingSymbol ${isLoading ? '' : 'd-none'}`}>
            <svg className="spinSymbol" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </ModalBody>
      </Modal>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA}
        className={isOpen ? '' : 'd-none'}
        onChange={handleSubmit}
      />
      <FormsSnackBar
        message={message}
        open_snackbar={open}
        severity={severity}
        handleClose={handleClose}
      />
    </>
  )
}

export default FormsModal
