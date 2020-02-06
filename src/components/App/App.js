import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import ChangePassword from '../ChangePassword/ChangePassword'
import Merchandise from '../Merchandise/Merchandise'
import MerchandiseItem from '../Merchandise/MerchandiseItem'
import SearchMerchandise from '../Merchandise/SearchMerchandise'
import EditMerchandiseInput from '../Merchandise/EditMerchandiseInput'
import AddMerchandiseInput from '../Merchandise/AddMerchandiseInput'
import './App.scss'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  setModalShowing = modalShowing => this.setState({ modalShowing })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state
    return (
      <div className='main-page'>
        {user && <Header user={user} />}
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <Route path='/sign-up' render={() => (
          <SignUp alert={this.alert} setUser={this.setUser} />
        )} />
        <Route exact path='/' render={() => (
          <Home user={user} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn alert={this.alert} setUser={this.setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/merchandise' render={() => (
          <Merchandise alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/item/:id/:name' render={() => (
          <MerchandiseItem alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/merchandise/search' render={() => (
          <SearchMerchandise alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/edit/:id/:name' render={() => (
          <EditMerchandiseInput alert={this.alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/add' render={() => (
          <AddMerchandiseInput alert={this.alert} user={user} />
        )} />
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
