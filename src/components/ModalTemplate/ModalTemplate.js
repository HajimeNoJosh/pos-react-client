import React from 'react'

import { Modal, Button } from 'react-bootstrap'

const ModalTemplate = (props) => {
  return (
    <div className='modal'>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
            {props.modaltitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className='modal-title'><span className='astrix'>*</span> indicates required field</h6>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button varient='danger' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalTemplate
