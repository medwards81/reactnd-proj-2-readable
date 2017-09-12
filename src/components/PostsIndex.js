import React from 'react'
import Categories from './Categories'
import Posts from './Posts'
import AddPost from './AddPost'

const PostsIndex = (props) => {
		return (
			<div>
				<Categories />
				<Posts />
				<AddPost />
			</div>
		)
}

export default PostsIndex
