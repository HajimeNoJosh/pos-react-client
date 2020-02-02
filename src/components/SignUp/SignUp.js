import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Title from '../Home/Title'

import './SignUp.scss'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert({
          heading: 'Sign Up Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state
    return (
      <div className="row background-color">
        <div className="mx-auto">
          { <Title title='Hajimeno POS' loginsubtitle='Sign Up' link='true' size='12' /> }
          <Form onSubmit={this.onSignUp}>
            <Form.Group controlId="email">
              <input
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
                className='form-background'
              />
            </Form.Group>
            <Form.Group controlId="password">
              <input
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                className='form-background'
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <input
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                className='form-background'
              />
            </Form.Group>
            <Button
              variant="light"
              type="submit"
              className='button'
            >
              Submit
            </Button>
            <div>Already have an account? <a href='#sign-in' >Click here</a></div>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
