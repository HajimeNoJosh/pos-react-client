import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Merchandise.scss'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter, Link, Redirect } from 'react-router-dom'

const EditMerchandise = (props) => {
  const [merchandise, setMerchandise] = useState()
  const [updated, setUpdated] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/merchandises/ ${merchandise.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.token}`,
        'Content-Type': 'application/json'
      },
      data: { merchandise }
    })
      .then(response => {
        props.alert({ heading: 'Success', message: `An item named ${merchandise.name} has been updated`, variant: 'success' })
      })
      .then(setUpdated(true))
      .catch(response => {
        props.alert({ heading: 'Danger', message: 'You failed to update an item', variant: 'failure' })
      })
  }

  const handleChange = event => {
    event.persist()
    setMerchandise(data => ({ ...data, [event.target.name]: event.target.value }))
  }

  if (updated) {
    return <Redirect to={
      { pathname: `/item/${merchandise.id}/${merchandise.name}` }
    } />
  }
  const gameOverJsx = function () {
    if (!merchandise) {
      axios({
        url: `${apiUrl}/merchandises/${props.match.params.id}`,
        method: 'GET',
        headers: {
          'Authorization': `Token token=${props.token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(res => setMerchandise(res.data.merchandise))
        .catch(console.error)
    } else {
      return <div>
        <div className="row my-4">
          <div className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="editMerchandise">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={merchandise.name}
                  className='merchandise-form-background'
                /><span className='astrix'>*</span>
              </Form.Group>
              <Form.Group controlId="addMerchandise">
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  onChange={handleChange}
                  value={merchandise.description}
                  className='merchandise-form-background'
                />
              </Form.Group>
              <Form.Group controlId="addMerchandise">
                <input

                  name="department"
                  type="text"
                  placeholder="Department"
                  onChange={handleChange}
                  value={merchandise.department}
                  className='merchandise-form-background'
                />
              </Form.Group>
              <Form.Group controlId="addMerchandise">
                <input
                  name="vendor"
                  type="text"
                  placeholder="Vendor"
                  onChange={handleChange}
                  value={merchandise.vendor}
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
                  value={merchandise.tax}
                  className='merchandise-form-background'
                /><span className='astrix'>*</span>
              </Form.Group>
              <Form.Group controlId="addMerchandise">
                <input

                  name="cost"
                  type="text"
                  placeholder="Cost"
                  value={merchandise.cost}
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
                  value={merchandise.retail}
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
                  value={merchandise.quantity}
                  className='merchandise-form-background'
                /><span className='astrix'>*</span>
              </Form.Group>
              <Form.Group controlId="addMerchandise">
                <input
                  required
                  name="barcode"
                  type="text"
                  placeholder="Barcode"
                  value={merchandise.barcode}
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
                  value={merchandise.category}
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
            <Link to={'/item/' + merchandise.id + '/' + merchandise.name} variant='dark' type='submit' className='button'>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    }
  }
  return (
    <div>
      {gameOverJsx()}
    </div>
  )
}

export default withRouter(EditMerchandise)
