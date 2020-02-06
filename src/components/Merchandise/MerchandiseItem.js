import React, { Fragment, useState } from 'react'
import './Merchandise.scss'
import { withRouter, Link, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import EditButton from './EditButton'

const MerchandiseItem = (props) => {
  const [item, setItem] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const userId = props.user._id

  const destroy = () => {
    axios({
      url: `${apiUrl}/merchandises/${props.match.params.id}`,
      method: 'DELETE',
      headers: { 'Authorization': `Token token=${props.token}` }
    })
      .then(() => setDeleted(true))
      .then(props.alert({
        heading: 'You deleted an item',
        message: `An item named ${item.name} has been deleted`,
        variant: 'success'

      }))
      .catch(() => props.alert({ heading: 'Nah...', message: 'That didn\'t work', variant: 'danger' }))
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/merchandise', state: { msg: 'Merchandise succesfully deleted!' } }
    } />
  }

  const itemJsx = function () {
    if (!item) {
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
    } else {
      return <Fragment>
        <div>
          Tasks {item.name}

          { <EditButton item={item} modaltitle='Edit Merchandise' classNameButton='button' title='Edit Merchandise' location='merchandise'>
          </EditButton>
          }
        </div>
        <div>
          <Link to='/merchandise/search' variant='dark' type='submit' className='button'>
          Search Merchandise
          </Link>
        </div>

        <div>
          {userId === item.owner && <button className='button' onClick={destroy}> Delete </button>}
        </div>
      </Fragment>
    }
  }

  return (
    <div>
      {itemJsx()}
    </div>
  )
}

export default withRouter(MerchandiseItem)
