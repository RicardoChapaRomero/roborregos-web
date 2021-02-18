// @flow
import React, { Component } from 'react'
import {
  Form, FormGroup, Label, Input, Row, Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap'
import sendJoinEmail from '../../../../../scripts/apiScripts'
import './FormsModal.css'

type SelectedPosition = {
  title: string
};

type Props = {
  selectedPosition: SelectedPosition,
  isOpen: boolean,
  toggle: () => void,
  onSubmit: () => void
};

class FormsModal extends Component<Props> {
  name: HTMLInputElement;

  career: HTMLInputElement;

  semester: HTMLInputElement;

  matricualtionNumber: HTMLInputElement;

  comments: HTMLInputElement;

  constructor(props: Props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.createMail = this.createMail.bind(this)
    this.getError = this.getError.bind(this)
  }

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { onSubmit, toggle } = this.props
    onSubmit()
    if (this.name.value && this.career.value && this.semester.value
      && this.matricualtionNumber.value && this.comments.value) {
      toggle()
      const mailParams = this.createMail()
      sendJoinEmail(mailParams).then((result) => {
        if (result.status === 200) {
          // eslint-disable-next-line no-alert
          alert('Thanks for your interest! \nCheck your Tec email \n')
        } else {
          throw new Error('Email-Server Error, Retry Later')
        }
      }, (error) => {
        // eslint-disable-next-line no-alert
        alert(`Something went wrong! \n${error.text}`)
      })
    }
  }

  getError = () => {
    const trySubmit = this.props
    if (trySubmit && this.name && this.career && this.semester
      && this.matricualtionNumber && this.comments
        && (!this.name.value || !this.career.value || !this.semester.value
        || !this.matricualtionNumber.value || !this.comments.value)) {
      return (
        <Row className="mt-4 mb-1 justify-content-center">
          <p className="text-danger"> Please fill out the entire forms</p>
        </Row>
      )
    }
    return null
  }

  createMail = () => {
    const emailBody = `Hola soy ${this.name.value}
      estudiante de ${this.career.value} de ${this.semester.value} semestre. \n
      ${this.comments.value}`
    const { selectedPosition } = this.props
    return ({
      message: emailBody,
      from_name: this.name.value,
      reply_to: `${this.matricualtionNumber.value}@itesm.mx`,
      position: selectedPosition.title,
    })
  }

  render() {
    const {
      selectedPosition, isOpen, toggle,
    } = this.props
    const greeting = `Join us as ${selectedPosition.title}!`

    return (
      <Modal id="candidates-join-modal" isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {' '}
          { greeting }
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <FormGroup className="col-md-6">
                <Label>Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Juanito"
                  innerRef={(input) => { this.name = input }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Matriculation Number</Label>
                <Input
                  type="text"
                  id="matricualtionNumber"
                  placeholder="A01283070"
                  innerRef={(input) => { this.matricualtionNumber = input }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Career</Label>
                <Input
                  type="text"
                  id="career"
                  placeholder="IMT"
                  innerRef={(input) => { this.career = input }}
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label>Semester</Label>
                <Input
                  type="select"
                  id="semester"
                  innerRef={(input) => { this.semester = input }}
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
                  placeholder="Why you want to join the team?"
                  innerRef={(input) => { this.comments = input }}
                />
              </FormGroup>
            </Row>
            <>
              {this.getError()}
              {' '}
            </>
            <Row className="mt-4 mb-1 justify-content-center">
              <Button className="mr-4 col-3 join" type="submit" value="submit">Join!</Button>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    )
  }
}

export default FormsModal
