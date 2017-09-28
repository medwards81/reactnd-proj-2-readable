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
import { openPostModal, closePostModal } from '../actions'
import PostForm from './PostForm'
import { fetchCategories } from '../actions'

class PostDetail extends Component {

	componentDidMount() {
		this.props.fetchCategories()
  }

	openEditPostModal = (post) => {
		this.props.openPostModal()
	}

	closeEditPostModal = () => {
		this.props.closePostModal()
	}

	render() {
		const { post } = this.props
		const { isPostModalOpen, categories } = this.props
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
							<Edit onClick={() => this.openEditPostModal(post)} size={16} style={{color:'#001f3f'}} />
							<Delete size={17} style={{color:'#001f3f',marginTop:'-2px',marginLeft:'2px'}} />
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
					<PostForm categories={categories} editPost={post} />
				</Modal>

		</div>
		)
	}
}

PostDetail.propTypes = {
	post: PropTypes.object.isRequired
}

const mapStateToProps = ({ isPostModalOpen, categories }) => {
	return {
		isPostModalOpen,
		categories
	}
}

export default connect(mapStateToProps, { openPostModal, closePostModal, fetchCategories })(PostDetail)
