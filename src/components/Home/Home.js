import React, { Fragment } from 'react'
import Join from './Join'
import Title from './Title'
import './Home.scss'

const authenticatedOptions = (
  <Fragment>

  </Fragment>
)

const Home = ({ user }) => {
  if (user) {
    return (
      <div className={user ? 'background1' : 'background2'}>
        <main className="container">
          <div>
            <div className='container'>
              <div className='row'>
                { <Title title='Hajimeno POS' subtitle='The last POS you will need' size='6' /> }
                { user ? authenticatedOptions : <Join /> }
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  } else {
    return (
      <div className={user ? 'background1' : 'background2'}>
        <main className="container">
          <div>
            <div className='container'>
              <div className='row'>
                { <Title title='Hajimeno POS' subtitle='The last POS you will need' size='12' /> }
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
