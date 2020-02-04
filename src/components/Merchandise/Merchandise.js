import React, { Fragment } from 'react'
import ModalButton from '../ModalTemplate/ModalButton'
import AddMerchandiseInput from './AddMerchandiseInput'
import SearchMerchandise from './SearchMerchandise'
// import axios from 'axios'

const Merchandise = (props) => {
  return (
    <Fragment>
      <main className="container">
        <div className='container'>
          <div className='row'>
            { <ModalButton modaltitle='Add Merchandise' classNameButton='button' title='Add Merchandise' location='merchandise'>
              <AddMerchandiseInput token={props.user.token} />
            </ModalButton>
            }
          </div>
          <div className='row'>
            { <ModalButton modaltitle='Search Merchandise' classNameButton='button' title='Search Merchandise' location='merchandise' >
              <SearchMerchandise token={props.user.token} />
            </ModalButton>
            }
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Merchandise
