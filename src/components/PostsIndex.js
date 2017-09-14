import React from 'react'
import Categories from './Categories'
import PostsList from './PostsList'
import AddPost from './AddPost'

const PostsIndex = (props) => {
		return (
			<div>
				<Categories />
				<PostsList />
				<AddPost />
			</div>
		)
}

export default PostsIndex
