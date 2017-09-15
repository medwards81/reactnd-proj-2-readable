import React from 'react'
import CategoryHeader from './CategoryHeader'
import PostsList from './PostsList'
import AddPost from './AddPost'

const CategoryIndex = (props) => {
		const { category } = props.match.params

		return (
			<div>
				<CategoryHeader category={category} />
				<PostsList category={category} />
				<AddPost />
			</div>
		)
}

export default CategoryIndex
