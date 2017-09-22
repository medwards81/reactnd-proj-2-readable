import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, setPostsSortOrder, fetchPostComments, setCurrentCategory } from '../actions'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import PostsListItem from './PostsListItem'

class PostsList extends Component {
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
		this.props.setCurrentCategory(this.props.category)
  }

	handleSortChange = (value) => {
		this.props.setPostsSortOrder(value)
		this.props.fetchPosts(this.props.category)
	}

	renderSortSelect = () => {
		const { postsSortOrder } = this.props
		return (
			<div className="sort-wrapper">
				<label htmlFor="sort-order">Sort by:</label>
				<select id="sort-order" value={postsSortOrder} onChange={event => this.handleSortChange(event.target.value)}>
					<option value="-voteScore">Vote Score</option>
					<option value="-timestamp">Newest</option>
				</select>
			</div>
		)
	}

	renderPosts = () => {
		const { posts, postsSortOrder } = this.props

		if (!posts.length) {
			return <li className="list-group-item">No posts found.</li>
		}

		posts.sort(sortBy(postsSortOrder))

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

export default connect(mapStateToProps, { fetchPosts, setPostsSortOrder, fetchPostComments, setCurrentCategory })(PostsList)
