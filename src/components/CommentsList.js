import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCommentsSortOrder } from '../actions'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import CommentListItem from './CommentListItem'

class CommentsList extends Component {
	static propTypes = {
		postId: PropTypes.string.isRequired
	}

	handleSortChange = (value) => {
		this.props.setCommentsSortOrder(value)
	}

	renderSortSelect = () => {
		const { commentsSortOrder } = this.props
		return (
			<div className="sort-wrapper">
				<label htmlFor="sort-order">Sort by:</label>
				<select id="sort-order" value={commentsSortOrder} onChange={event => this.handleSortChange(event.target.value)}>
					<option value="-voteScore">Vote Score</option>
					<option value="-timestamp">Newest</option>
				</select>
			</div>
		)
	}

	renderComments = () => {
		const { postDetailComments, commentsSortOrder } = this.props

		if (!postDetailComments.length) {
			return <li className="list-group-item">No comments found.</li>
		}

		postDetailComments.sort(sortBy(commentsSortOrder))

		return postDetailComments.map(comment =>
			<CommentListItem key={comment.id} comment={comment} />
		);
	}

  render() {
		const { postDetailComments } = this.props
    return (
			<div>
				<div className="sort-form" style={{padding:'15px'}}>
					<span className="comment-count">{postDetailComments.length} {postDetailComments.length === 1 ? 'comment' : 'comments'}</span>
					<form>
						{this.renderSortSelect()}
					</form>
				</div>
				<ul className="list-group">
					{this.renderComments()}
				</ul>
			</div>
    )
  }
}

function mapStateToProps({ commentsSortOrder, postDetailComments }) {
	return { commentsSortOrder, postDetailComments }
}

export default connect(mapStateToProps, { setCommentsSortOrder } )(CommentsList)
