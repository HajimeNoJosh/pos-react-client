import React from 'react'

const Title = (props) => {
  const { title, size, subtitle, loginsubtitle, link } = props
  if (link === 'true') {
    return (
      <div className={'title col-sm-' + size}>
        <a className='title-color' href='#'>  <h2 className='joining'>{title}</h2> </a>
        <h3 className='joining'>{loginsubtitle}</h3>
        <h5 className='joining'>{subtitle}</h5>
      </div>
    )
  } else {
    return (
      <div className={'title col-sm-' + size}>
        <h2 className='joining'>{title}</h2>
        <h3 className='joining'>{loginsubtitle}</h3>
        <h5 className='joining'>{subtitle}</h5>
      </div>
    )
  }
}

export default Title
