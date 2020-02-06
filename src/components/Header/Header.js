import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './Header.scss'
import SearchButton from '../Merchandise/SearchButton'
import AddButton from '../Merchandise/AddButton'

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
  </Fragment>
)

const Header = ({ user }) => {
  return (
    <Navbar bg='dark' variant="dark" expand="md">
      <Navbar.Brand>
        Hajimeno POS
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { alwaysOptions }
          { user &&
            <ButtonToolbar>
              <SplitButton id='Merchandise' bg='dark' variant='dark' href='#/' className='user-options' title={'Welcome, ' + user.email } >
                <Dropdown.Item className='change-pass-hover' href="#change-password">Change Password</Dropdown.Item>
                <Dropdown.Item href="#sign-out">Sign Out</Dropdown.Item>
              </SplitButton>
            </ButtonToolbar>
          }
          { user ? (
            <SplitButton id='Merchandise' href='#merchandise' bg='dark' variant='dark' title='Merchandise' className='user-options' >
              { <AddButton modaltitle='Add Merchandise' classNameButton='dropdown-item' title='Add Merchandise' location='merchandise' >
              </AddButton>
              }
              { <SearchButton modaltitle='Search Merchandise' classNameButton='dropdown-item' title='Search Merchandise' location='merchandise' >
              </SearchButton>
              }
            </SplitButton>
          ) : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
