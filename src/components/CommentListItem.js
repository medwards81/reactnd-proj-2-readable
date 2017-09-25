import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VoteScore from './VoteScore'
import TimeAgo from 'react-timeago'

class CommentListItem extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired
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
									submitted <TimeAgo date={comment.timestamp} />
									&nbsp;
									by <span className="post-author">{comment.author}</span>
									</div>
						</div>
				</div>
			</li>
		)
	}
}

export default CommentListItem
