import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import PageNotFound from './PageNotFound'
import PostsIndex from './PostsIndex'
import './App.css'

class ReadableApp extends Component {
  render() {
    return (
      <div className="app container-fluid">
				<Header />
				<div className="main">
          <Switch>
            <Route exact path='/' component={PostsIndex} />
            <Route path="/categories/:id" render={() => (
              <div>Category Page</div>
            )}/>
            <Route component={PageNotFound} />
          </Switch>
				</div>
      </div>
    )
  }
}

export default ReadableApp
