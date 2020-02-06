import React, { Fragment } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import '../ModalTemplate/Modal.scss'

const Merchandise = (props) => {
  return (
    <Fragment>
      <main className="container">
        <div className='container'>
          <div className='row'>
            <Link to='/add' variant='dark' type='submit' className='button'>
            Add Merchandise
            </Link>
          </div>
          <div className='row'>
            <Link to='/merchandise/search' variant='dark' type='submit' className='button'>
              Search Merchandise
            </Link>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Merchandise
