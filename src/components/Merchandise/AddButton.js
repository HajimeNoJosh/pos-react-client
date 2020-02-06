import React, { Fragment } from 'react'
import '../ModalTemplate/Modal.scss'
import { Link } from 'react-router-dom'

const AddButton = (props) => {
  const { title, classNameButton } = props
  return (
    <Fragment>
      <Link to={'/add/'} props={props.item} variant='dark' type='submit' className={classNameButton}>
        {title}
      </Link>
    </Fragment>
  )
}

export default AddButton
