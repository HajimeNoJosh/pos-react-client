import React, { Fragment } from 'react'
import '../ModalTemplate/Modal.scss'
import { Link } from 'react-router-dom'

const SearchButton = (props) => {
  const { title, classNameButton } = props

  return (
    <Fragment>
      <Link to='/merchandise/search' variant='dark' type='submit' className={classNameButton}>
        {title}
      </Link>
    </Fragment>
  )
}

export default SearchButton
