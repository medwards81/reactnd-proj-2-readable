import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts, updateSortOrder } from '../actions'
import sortBy from 'sort-by'
import VoteScore from './VoteScore'
import TimeAgo from 'react-timeago'

class Posts extends Component {

  componentDidMount() {
		this.props.fetchPosts(this.props.category)
  }

	handleSortChange = (value) => {
    console.log(value)
		this.props.updateSortOrder(value)
	}

	renderSortSelect = () => {
		const { sortOrder } = this.props
		return (
			<div className="sort-wrapper">
				<label htmlFor="sort-order">Sort by:</label>
				<select id="sort-order" value={sortOrder} onChange={event => this.handleSortChange(event.target.value)}>
					<option value="-voteScore">Votes</option>
					<option value="timestamp">Submit Date</option>
				</select>
			</div>
		)
	}

	renderPosts = () => {
		const { posts, sortOrder } = this.props
		posts.sort(sortBy(`${sortOrder}`))
		return posts.map(post =>
			<li className="list-group-item" key={post.id}>
        <div className="post-wrapper">
				    <VoteScore type="post" id={post.id} score={post.voteScore} />
            <div className="post-wrapper-content">
				        <div className="post-title">
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </div>
                <div className="post-submitted">
                  submitted <TimeAgo date={post.timestamp} />  by <span className="post-author">{post.author}</span>
                </div>
                <div className="post-category">
                  <Link to={`/categories/${post.category}/posts`}>{`r/${post.category}`}</Link>
                </div>
            </div>
        </div>
			</li>
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

function mapStateToProps({ posts, sortOrder }) {
	return { posts, sortOrder }
}

export default connect(mapStateToProps, { fetchPosts, updateSortOrder })(Posts)
