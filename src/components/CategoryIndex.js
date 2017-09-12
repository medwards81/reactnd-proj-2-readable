import React, { Component } from 'react'
import CategoryHeader from './CategoryHeader'
import Posts from './Posts'
import AddPost from './AddPost'

class CategoryIndex extends Component {
	render() {
		const { category } = this.props.match.params

		return (
			<div>
				<CategoryHeader category={category} />
				<Posts category={category} />
				<AddPost />
			</div>
		)
	}
}

export default CategoryIndex
