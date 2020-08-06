import React from 'react'
import './App.scss'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './container/Main/Main'
import About from './container/About/About'
import Contacts from './container/Contacts/Contacts'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/works" component={Main} />
          <Route path="/contacts" component={Contacts} />
          <Redirect to="/about" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
