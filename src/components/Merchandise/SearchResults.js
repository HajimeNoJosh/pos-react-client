import React, { Fragment } from 'react'
// import axios from 'axios'
import './Merchandise.scss'

const SearchResults = (props) => {
  const { results } = props
  let resultsJsx
  if (results) {
    if (results.merchandises) {
      resultsJsx = results.merchandises.map(result => (
        <div className='modal-title results' key={result.id}>{result.name}</div>
      ))
    } else {
      return <div className='modal-title results'>No Results Found</div>
    }
  }

  return (
    <Fragment>
      {resultsJsx}
    </Fragment>
  )
}

export default SearchResults
