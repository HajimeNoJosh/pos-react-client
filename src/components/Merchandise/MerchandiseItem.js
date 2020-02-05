import React, { Fragment, useEffect, useState } from 'react'
import './Merchandise.scss'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'

const MerchandiseItem = (props) => {
  const [item, setItem] = useState(null)

  useEffect(() => {
    axios({
      url: `${apiUrl}/merchandises/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => setItem(res.data.merchandise))
      .catch(console.error)
  }, [props.match.params.id])

  if (!item) {
    return <div> ...loading  </div>
  }

  return (
    <Fragment>
      <div>
        {item.name}
      </div>
    </Fragment>
  )
}

export default withRouter(MerchandiseItem)
