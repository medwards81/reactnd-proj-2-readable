import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import TimeAgo from 'react-timeago'
import CommentsList from './CommentsList'

const PostListItem = (props) => {
		const { post } = props
		return (
			<div className="panel panel-default">
				<div className="panel-body" style={{marginBottom:'20px'}}>
					<div className="post-wrapper">
							<VoteScore type="post" id={post.id} score={post.voteScore} />
							<div className="post-wrapper-content">
									<div className="post-title-details">{post.title}</div>
									<div className="post-submitted">
										submitted <TimeAgo date={post.timestamp} />
										&nbsp;
										by <span className="post-author">{post.author}</span> to
										&nbsp;
										<span className="post-category">
											<Link to={`/r/${post.category}/posts`}>{`r/${post.category}`}</Link>
										</span>
									</div>
							</div>
							<div className="post-details-body">
								{post.body}
							</div>
					</div>
				</div>
				<CommentsList postId={post.id} />
			</div>
		)
}

PostListItem.propTypes = {
	post: PropTypes.object.isRequired
}

export default PostListItem
