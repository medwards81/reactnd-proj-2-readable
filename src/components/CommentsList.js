import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCommentsSortOrder, openCommentModal, closeCommentModal, setCurrentCommentEdit } from '../actions'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import CommentListItem from './CommentListItem'
import CommentForm from './CommentForm'
import Modal from 'react-modal'

class CommentsList extends Component {
	static propTypes = {
		postId: PropTypes.string.isRequired
	}

	handleSortChange = (value) => {
		this.props.setCommentsSortOrder(value)
	}

	openCommentModal = () => {
		this.props.setCurrentCommentEdit({})
		this.props.openCommentModal()
	}

	closeCommentModal = () => {
		this.props.closeCommentModal()
	}

	renderSortSelect = () => {
		const { commentsSortOrder } = this.props
		return (
			<div className="sort-wrapper">
				<button
					type="button"
					className="btn btn-sm btn-primary add-post-btn"
					onClick={() => this.openCommentModal()}
				>Add Comment</button>
				&nbsp;
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
		const { postDetailComments, isCommentModalOpen, postId } = this.props
    return (
			<div>
				<div className="sort-form" style={{padding:'15px'}}>
					<span className="comment-count">{postDetailComments.length} {postDetailComments.length === 1 ? 'comment' : 'comments'}</span>
					<form>
						{this.renderSortSelect()}
					</form>
				</div>
				<ul className="list-group" style={{marginTop:'30px'}}>
					{this.renderComments()}
				</ul>
				<Modal
					className='mod-content'
					overLayClassName='mod-overlay'
					isOpen={isCommentModalOpen}
					onRequestClose={this.closeCommentModal}
					contentLabel='Modal'
				>
					{isCommentModalOpen && <CommentForm postId={postId} />}
				</Modal>
			</div>
    )
  }
}

function mapStateToProps({ commentsSortOrder, postDetailComments, isCommentModalOpen }) {
	return { commentsSortOrder, postDetailComments, isCommentModalOpen }
}

export default connect(mapStateToProps, { setCommentsSortOrder, openCommentModal, closeCommentModal, setCurrentCommentEdit } )(CommentsList)
