import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts, updateSortOrder } from '../actions'
import sortBy from 'sort-by'
import VoteScorePost from './VoteScorePost'

class Posts extends Component {

  componentDidMount() {
		this.props.fetchPosts(this.props.category)
  }

	handleSortChange = (value) => {
		this.props.updateSortOrder(value)
	}

	renderSortSelect = () => {
		const { sortOrder } = this.props
		return (
			<div className="sort-wrapper">
				<label htmlFor="sort-order">Sort by:</label>
				<select id="sort-order" value={sortOrder} onChange={event => this.handleSortChange(event.target.value)}>
					<option value="-voteScore">Vote Score</option>
					<option value="timestamp">Date and Time</option>
				</select>
			</div>
		)
	}

	renderPosts = () => {
		const { posts, sortOrder } = this.props
		posts.sort(sortBy(`${sortOrder}`))
		return posts.map(post =>
			<li className="list-group-item" key={post.id}>
				<VoteScorePost id={post.id} />
				<Link to={`/posts/${post.id}`}>{post.title}</Link>
			</li>
		);
	}

  render() {
    return (
			<div>
				<div className="sort-form panel">
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

function mapStateToProps({ posts, sortOrder }) {
	return { posts, sortOrder }
}

export default connect(mapStateToProps, { fetchPosts, updateSortOrder })(Posts)
