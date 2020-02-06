import React, { Fragment } from 'react'
import '../ModalTemplate/Modal.scss'
import { Link } from 'react-router-dom'

const EditButton = (props) => {
  const { title, classNameButton, item } = props
  console.log(item)
  return (
    <Fragment>
      <Link to={'/edit/' + item.id + '/' + item.name} props={props.item} variant='dark' type='submit' className={classNameButton}>
        {title}
      </Link>
    </Fragment>
  )
}

export default EditButton
