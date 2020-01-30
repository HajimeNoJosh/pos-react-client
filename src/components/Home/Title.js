import React from 'react'

const Title = (props) => {
  const { title, subtitle, size } = props
  return (
    <div className={'title col-sm-' + size}>
      <h2 className='joining'><a className='title-color' href='/#/'>{title}</a></h2>
      <p className='joining'>{subtitle}</p>
    </div>
  )
}

export default Title
