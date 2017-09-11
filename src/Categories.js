import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as PostsAPI from './utils/PostsAPI'

class Categories extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    PostsAPI.getCategories().then(categories => {
      console.log(categories)
      this.setState({ categories })
    })
  }
  render() {
    return (
      <div className="categories panel panel-default">
        <div className="panel-body">
          <span>Categories:</span>
          {
            this.state.categories.map(
              (category, idx) =>
                <Link
                  key={idx}
                  to={`/categories/${category.name}`}
                  className="btn btn-default btn-sm">{category.name}
                </Link>
              )
          }
        </div>
      </div>
    )
  }
}

export default Categories
