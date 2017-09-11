import React, { Component } from 'react'
import Categories from './Categories'
import Posts from './Posts'
import AddPost from './AddPost'

class PostsIndex extends Component {
	render() {
		return (
			<div>
				<Categories />
				<Posts />
				<AddPost />
			</div>
		)
	}
}

export default PostsIndex
