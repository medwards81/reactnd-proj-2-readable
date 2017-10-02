import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import TimeAgo from 'react-timeago'
import CommentsList from './CommentsList'
import Edit from 'react-icons/lib/fa/edit'
import Delete from 'react-icons/lib/fa/trash-o'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { openPostModal, closePostModal, deletePost } from '../actions'
import PostForm from './PostForm'

class PostDetail extends Component {
	openEditPostModal = () => {
		this.props.openPostModal(true)
	}

	closeEditPostModal = () => {
		this.props.closePostModal(true)
	}

	deletePost({id}, currentCategory) {
		this.props.deletePost(id, () => {
			if (currentCategory !== 'ALL') this.props.history.push(`/r/${currentCategory}/posts`)
			else this.props.history.push('/')
		})
	}

	render() {
		const { post } = this.props
		const { isPostModalOpen, currentCategory } = this.props

		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-body" style={{marginBottom:'20px',position:'relative'}}>
						<div className="post-wrapper">
								<VoteScore type="posts" id={post.id} score={post.voteScore} />
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
						<div className="edit-post">
							<span title="edit post"><Edit onClick={() => this.openEditPostModal()} size={16} style={{color:'#001f3f'}} /></span>
							<span title="delete post"><Delete onClick={() => this.deletePost(post, currentCategory)} size={17} style={{color:'#001f3f',marginTop:'-2px',marginLeft:'2px'}} /></span>
						</div>
					</div>
					<CommentsList postId={post.id} />
				</div>

				<Modal
					className='mod-content'
					overLayClassName='mod-overlay'
					isOpen={isPostModalOpen}
					onRequestClose={this.closeEditPostModal}
					contentLabel='Modal'
				>
					{isPostModalOpen && <PostForm editPost={post} />}
				</Modal>

		</div>
		)
	}
}

PostDetail.propTypes = {
	post: PropTypes.object.isRequired
}

const mapStateToProps = ({ isPostModalOpen, currentCategory }) => {
	return {
		isPostModalOpen,
		currentCategory
	}
}

export default connect(mapStateToProps, { openPostModal, closePostModal, deletePost })(PostDetail)
