import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Landing from './container/landingPage/landingPage'
import Open from './container/Open/open'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/open" component={Open} />
        </Router>
      </div>
    )
  }
}
