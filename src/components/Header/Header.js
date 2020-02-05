import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './Header.scss'
import ModalButton from '../ModalTemplate/ModalButton'
import AddMerchandiseInput from '../Merchandise/AddMerchandiseInput'
import SearchMerchandise from '../Merchandise/SearchMerchandise'

// const AuthenticatedOptions = (setModalShow) => {
//   setModalShow(true)
//   return (
//     <Fragment>
//       <SplitButton id='Merchandise' href='#merchandise' bg='dark' variant='dark' title='Merchandise' className='user-options' >
//         { <ModalButton setModalShow={setModalShow} modaltitle='Add Merchandise' classNameButton='dropdown-item' title='Add Merchandise' location='merchandise'>
//           <AddMerchandiseInput token={this.token} />
//         </ModalButton>
//         }
//         { <ModalButton setModalShow={setModalShow} modaltitle='Search Merchandise' classNameButton='dropdown-item' title='Search Merchandise' location='merchandise' >
//           <SearchMerchandise token={this.token} />
//         </ModalButton>
//         }
//       </SplitButton>
//     </Fragment>
//   )
// }

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
              { <ModalButton modaltitle='Add Merchandise' classNameButton='dropdown-item' title='Add Merchandise' location='merchandise'>
                <AddMerchandiseInput token={this.token} />
              </ModalButton>
              }
              { <ModalButton modaltitle='Search Merchandise' classNameButton='dropdown-item' title='Search Merchandise' location='merchandise' >
                <SearchMerchandise token={this.token} />
              </ModalButton>
              }
            </SplitButton>
          ) : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
