import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import PageNotFound from './PageNotFound'
import PostsIndex from './PostsIndex'
import CategoryIndex from './CategoryIndex'
import PostDetails from './PostDetails'
import './App.css'

class ReadableApp extends Component {
  render() {
    return (
      <div className="app container">
				<Header />
				<div className="main">
          <Switch>
            <Route exact path='/' component={PostsIndex} />
            <Route path="/r/:category/posts" component={CategoryIndex} />
						<Route path="/posts/:id" component={PostDetails} />
            <Route component={PostsIndex} />
          </Switch>
				</div>
      </div>
    )
  }
}

export default ReadableApp
