import React from 'react'
import Categories from './Categories'
import CategoryHeader from './CategoryHeader'
import PostsList from './PostsList'

const CategoryIndex = (props) =>  {
		const { category } = props.match.params

		return (
			<div>
				<CategoryHeader category={category} />
				<PostsList category={category} />
			</div>
		)
}

export default CategoryIndex
