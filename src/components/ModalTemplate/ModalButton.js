import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap'
import ModalTemplate from './ModalTemplate'
import './Modal.scss'

const ModalButton = (props) => {
  const { title, modaltitle, classNameButton } = props
  const [modalShow, setModalShow] = useState(false)
  const modalClose = () => {
    setModalShow(false)
  }

  return (
    <Fragment>
      <Button onClick={() => setModalShow(true)} variant='light' type='submit' className={classNameButton}>
        {title}
      </Button>
      <ModalTemplate
        show={modalShow}
        onHide={modalClose}
        modaltitle={modaltitle}>
        {props.children}
      </ModalTemplate>
    </Fragment>
  )
}

export default ModalButton
