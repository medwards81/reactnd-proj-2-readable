import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Categories extends Component {

  componentDidMount() {
		this.props.fetchCategories()
  }

  render() {
    return (
      <div className="categories panel panel-default">
        <div className="panel-body">
          <span>Categories:</span>
          {
            this.props.categories.map(
              (category, idx) =>
                <Link
                  key={idx}
                  to={`/categories/${category.path}`}
                  className="btn btn-default btn-sm">{category.name}
                </Link>
              )
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
	return { categories }
}

export default connect(mapStateToProps, { fetchCategories })(Categories)
