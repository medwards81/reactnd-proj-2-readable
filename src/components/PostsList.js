import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, setPostsSortOrder, fetchPostComments } from '../actions'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import PostsListItem from './PostsListItem'

class Posts extends Component {
	static propTypes = {
		category: PropTypes.string
	}

	static defaultProps = {
		category: 'ALL'
	}

  componentDidMount() {
		this.props.fetchPosts(this.props.category)
			.then(action => {
				action.payload.forEach((post) => {
					this.props.fetchPostComments(post.id)
				})
			})
  }

	handleSortChange = (value) => {
		this.props.setPostsSortOrder(value)
	}

	renderSortSelect = () => {
		const { postsSortOrder } = this.props
		return (
			<div className="sort-wrapper">
				<label htmlFor="sort-order">Sort by:</label>
				<select id="sort-order" value={postsSortOrder} onChange={event => this.handleSortChange(event.target.value)}>
					<option value="-voteScore">Vote Score</option>
					<option value="timestamp">Submit Date</option>
				</select>
			</div>
		)
	}

	renderPosts = () => {
		const { posts, sortOrder } = this.props

		if (!posts.length) {
			return <li className="list-group-item">No posts found.</li>
		}

		posts.sort(sortBy(`${sortOrder}`))

		return posts.map(post =>
			<PostsListItem key={post.id} post={post} />
		);
	}

  render() {
    return (
			<div>
				<div className="sort-form">
					<form>
						{this.renderSortSelect()}
					</form>
				</div>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
    )
  }
}

function mapStateToProps({ posts, postsSortOrder, postComments }) {
	return { posts, postsSortOrder, postComments }
}

export default connect(mapStateToProps, { fetchPosts, setPostsSortOrder, fetchPostComments })(Posts)
