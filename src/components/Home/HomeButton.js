import React from 'react'
import Button from 'react-bootstrap/Button'

const HomeButton = (props) => {
  const { title, size, location } = props

  return (
    <Button variant='light' href={'#' + location} type='submit' className={'title col-sm-' + size + ' joining button-click'}>
      {title}
    </Button>
  )
}

export default HomeButton
