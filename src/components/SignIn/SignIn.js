import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SignIn.scss'
import Title from '../Home/Title'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state
    return (
      <div className="row background-color">
        <div className="mx-auto">
          { <Title title='Hajimeno POS' link='true' loginsubtitle='Sign In' size='12' /> }
          <Form onSubmit={this.onSignIn}>
            <Form.Group controlId="email" >
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
            <Button
              variant="light"
              type="submit"
              className='button'
            >
              Submit
            </Button>
            <div>Don&apos;t have an account yet? <a href='#sign-up' >Click here</a></div>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
