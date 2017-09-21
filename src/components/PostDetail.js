import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PostVoteScore from './PostVoteScore'
import TimeAgo from 'react-timeago'
import CommentsList from './CommentsList'
import { setCurrentPost, fetchPostDetailComments } from '../actions'

class PostListItem extends Component {
	static propTypes = {
		post: PropTypes.object.isRequired
	}

	componentDidMount() {
		this.props.setCurrentPost(this.props.post.id)
		this.props.fetchPostDetailComments(this.props.post.id)
	}

	render() {
		const { post } = this.props
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="post-wrapper">
							<PostVoteScore type="post" id={post.id} score={post.voteScore} />
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
				<CommentsList postId={this.props.post.id} />
			</div>
		)
	}
}

export default connect(null, { setCurrentPost, fetchPostDetailComments })(PostListItem)
