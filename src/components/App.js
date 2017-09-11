import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Categories from './Categories'
import AddPost from './AddPost'
import PageNotFound from './PageNotFound'
import * as PostsAPI from '../utils/PostsAPI'
import './App.css'

class ReadableApp extends Component {
  render() {
    return (
      <div className="app container-fluid">
				<Header />
				<div className="main">
          <Switch>
            <Route exact path='/' render={() => (
              <div>
                <Categories />
                <div>Home page</div>
                <AddPost />
              </div>
            )}/>
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
