import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Merchandise.scss'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import SearchResults from './SearchResults'

const SearchMerchandise = (props) => {
  const [merchandise, setMerchandise] = useState({ })
  const [results, setResults] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/merchandises/?name=${merchandise.name}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => setResults(res.data))
      .catch(console.error)
  }

  const handleChange = event => {
    event.persist()
    setMerchandise(data => ({ ...data, [event.target.name]: event.target.value }))
  }

  return (
    <div>
      <div className="row my-4">
        <div className="mx-auto searched-merchandise happy-center-add">
          <Form onSubmit={handleSubmit} className='results'>
            <Form.Group controlId="searchMerchandise">
              <input
                required
                name="name"
                type="text"
                placeholder="Merchandise"
                onChange={handleChange}
                className='merchandise-form-background'
              /><span className='astrix'>*</span>
              <Button
                variant="dark"
                type="submit"
                className='search-button'
              >
              Search
              </Button>
            </ Form.Group>
          </Form>
          <div className='searched-merchandise'>
            <SearchResults results={results} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchMerchandise
