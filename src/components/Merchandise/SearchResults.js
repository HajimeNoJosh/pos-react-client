import React, { Fragment } from 'react'
// import axios from 'axios'
import './Merchandise.scss'
import { Link, withRouter } from 'react-router-dom'

const SearchResults = (props) => {
  const { results } = props
  let resultsJsx
  if (results) {
    if (results.merchandises) {
      resultsJsx = results.merchandises.map(result => (
        <div className='container' key={result.id}>
          <div className='row'>
            <Link to={'/item/' + result.id + '/' + result.name} className="col-sm-4 results">
              {result.name}
            </Link>
            <span className="col-sm-4 results">
              ${result.retail}
            </span>
            <span className="col-sm-4 results">
              {result.quantity}
            </span>
          </div>
        </div>
      ))
    } else {
      return <div className='modal-title results'>No Results Found</div>
    }
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className="col-sm-4 results">
              Name
          </div>
          <span className="col-sm-4 results">
              Retail
          </span>
          <span className="col-sm-4 results">
              Quantity
          </span>
        </div>
      </div>

      {resultsJsx}
    </Fragment>
  )
}

export default withRouter(SearchResults)
