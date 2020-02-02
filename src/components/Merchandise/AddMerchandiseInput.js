import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Merchandise.scss'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const AddMerchandise = (props) => {
  const [merchandise, setMerchandise] = useState({ })
  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/merchandises`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.token}`,
        'Content-Type': 'application/json'
      },
      data: { merchandise }
    })
      .then()
      .catch(console.error)
  }

  const handleChange = event => {
    event.persist()
    setMerchandise(data => ({ ...data, [event.target.name]: event.target.value }))
  }

  return (
    <div className="row">
      <div className="mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="addMerchandise">
            <input
              required
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              className='merchandise-form-background'
            /><span className='astrix'>*</span>
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
              className='merchandise-form-background'
            />
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input

              name="department"
              type="text"
              placeholder="Department"
              onChange={handleChange}
              className='merchandise-form-background'
            />
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input
              name="vendor"
              type="text"
              placeholder="Vendor"
              onChange={handleChange}
              className='merchandise-form-background'
            />
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input
              required
              name="tax"
              type="text"
              placeholder="Tax"
              onChange={handleChange}
              className='merchandise-form-background'
            /><span className='astrix'>*</span>
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input

              name="cost"
              type="text"
              placeholder="Cost"
              onChange={handleChange}
              className='merchandise-form-background'
            />
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input
              required
              name="retail"
              type="text"
              placeholder="Retail"
              onChange={handleChange}
              className='merchandise-form-background'
            /><span className='astrix'>*</span>
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input
              required
              name="quantity"
              type="text"
              placeholder="Quantity"
              onChange={handleChange}
              className='merchandise-form-background'
            /><span className='astrix'>*</span>
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input
              required
              name="barcode"
              type="text"
              placeholder="Barcode"
              onChange={handleChange}
              className='merchandise-form-background'
            /><span className='astrix'>*</span>
          </Form.Group>
          <Form.Group controlId="addMerchandise">
            <input
              name="category"
              type="text"
              placeholder="Category"
              onChange={handleChange}
              className='merchandise-form-background'
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className='button'
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddMerchandise
