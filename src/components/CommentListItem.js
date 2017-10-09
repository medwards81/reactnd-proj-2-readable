import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VoteScore from './VoteScore'
import TimeAgo from 'react-timeago'
import Edit from 'react-icons/lib/fa/edit'
import Delete from 'react-icons/lib/fa/trash-o'
import { connect } from 'react-redux'
//import { deleteComment, fetchPostDetailComments, openCommentModal, setCurrentCommentEdit } from '../actions'
import * as actions from '../actions'

class CommentListItem extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired
	}

	openCommentModal(comment) {
		this.props.setCurrentCommentEdit(comment)
		this.props.openCommentModal()
	}

	deleteComment(comment) {
		this.props.deleteComment(comment.id, () => {
			this.props.fetchPostDetailComments(comment.parentId)
		})
	}

	render() {
		const { comment } = this.props
		return (
			<li className="list-group-item" key={comment.id}>
				<div className="post-wrapper">
						<VoteScore type="comments" id={comment.id} score={comment.voteScore} />
						<div className="post-wrapper-content">
								<div className="comment-body">
									{comment.body}
								</div>
								<div className="post-submitted">
									submitted <TimeAgo date={comment.timestamp} live={false} />
									&nbsp;
									by <span className="post-author">{comment.author}</span>
									</div>
						</div>
						<div className="edit-post">
							<span title="edit comment"><Edit onClick={() => this.openCommentModal(comment)} size={16} style={{color:'#001f3f'}} /></span>
							<span title="delete comment"><Delete onClick={() => this.deleteComment(comment)} size={17} style={{color:'#001f3f',marginTop:'-2px',marginLeft:'2px'}} /></span>
						</div>
				</div>
			</li>
		)
	}
}

export default connect(null, actions)(CommentListItem)
