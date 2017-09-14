import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import TimeAgo from 'react-timeago'

class PostListItem extends Component {
	static propTypes = {
		post: PropTypes.object.isRequired
	}

	render() {
		const { post, postComments } = this.props
		return (
			<li className="list-group-item" key={post.id}>
				<div className="post-wrapper">
						<VoteScore type="post" id={post.id} score={post.voteScore} />
						<div className="post-wrapper-content">
								<div className="post-title">
									<Link to={`/posts/${post.id}`}>{post.title}</Link>
								</div>
								<div className="post-submitted">
									submitted <TimeAgo date={post.timestamp} />
									&nbsp;
									by <span className="post-author">{post.author}</span> in
									&nbsp;
									<span className="post-category">
										<Link to={`/r/${post.category}/posts`}>{`r/${post.category}`}</Link>
									</span>
								</div>
								<div className="post-comments">
									{ postComments.length
										? <Link to={`/posts/${post.id}`}>{postComments.length} comments</Link>
										: '0 comments'
									}
								</div>
						</div>
				</div>
			</li>
		)
	}
}

function mapStateToProps({ postComments }, ownProps) {
	return { postComments: postComments.filter(comment => comment.parentId === ownProps.post.id) }
}

export default connect(mapStateToProps)(PostListItem)
