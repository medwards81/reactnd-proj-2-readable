import React, { Component } from 'react'
import CategoryHeader from './CategoryHeader'
import PostsList from './PostsList'
import AddPost from './AddPost'

class CategoryIndex extends Component {
	render() {
		const { category } = this.props.match.params

		return (
			<div>
				<CategoryHeader category={category} />
				<PostsList category={category} />
				<AddPost />
			</div>
		)
	}
}

export default CategoryIndex
