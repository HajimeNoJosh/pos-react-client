import React, { Fragment } from 'react'
import Join from './Join'
import Title from './Title'
import './Home.scss'
import HomeButton from './HomeButton'

const authenticatedOptions = (
  <Fragment>

  </Fragment>
)

const Home = ({ user }) => {
  if (user) {
    return (
      <div className='background1'>
        <main className="container">
          <Fragment>
            <div className='container'>
              <div className='row'>
                { <Title title='Hajimeno POS' subtitle='The Last POS you will ever need' size='6' /> }
                { user ? authenticatedOptions : <Join /> }
                { <HomeButton title='Merchandise' location='merchandise' size='6' /> }
              </div>
            </div>
          </Fragment>
        </main>
      </div>
    )
  } else {
    return (
      <div className='background2'>
        <main className="container">
          <div>
            <div className='container'>
              <div className='row'>
                { <Title title='Hajimeno POS' subtitle='The Last POS you will ever need' size='12' /> }
                { user ? authenticatedOptions : <Join /> }
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
