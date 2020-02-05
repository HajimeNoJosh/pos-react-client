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
        <Link className={'modal-title results'} to={'/item/' + result.id + '/' + result.name} key={result.id}>{result.name}</Link>
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

export default withRouter(SearchResults)
