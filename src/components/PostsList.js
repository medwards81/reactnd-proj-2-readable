import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, setPostsSortOrder, fetchPostComments, setCurrentCategory, fetchCategories } from '../actions'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import PostsListItem from './PostsListItem'
import { openPostModal, closePostModal } from '../actions'
import PostForm from './PostForm'
import Modal from 'react-modal'

class PostsList extends Component {
	static propTypes = {
		category: PropTypes.string
	}

	static defaultProps = {
		category: 'ALL'
	}

  componentDidMount() {
		const { categories, category, fetchCategories, setCurrentCategory, fetchPosts, fetchPostComments } = this.props

		if (! categories.length) fetchCategories()
		setCurrentCategory(category)
		fetchPosts(category)
			.then(action => {
				action.payload.forEach((post) => {
					fetchPostComments(post.id)
				})
			})
  }

	handleSortChange = (value) => {
		this.props.setPostsSortOrder(value)
		this.props.fetchPosts(this.props.category)
	}

	openPostModal = () => {
		this.props.openPostModal()
	}

	closePostModal = () => {
		this.props.closePostModal()
	}

	renderSortSelect = () => {
		const { postsSortOrder } = this.props
		return (
			<div className="sort-wrapper">
				<button
					type="button"
					className="btn btn-sm btn-primary add-post-btn"
					onClick={() => this.openPostModal()}
				>Add Post</button>
				&nbsp;
				<label htmlFor="sort-order">Sort by:</label>
				<select id="sort-order" value={postsSortOrder} onChange={event => this.handleSortChange(event.target.value)}>
					<option value="-voteScore">Vote Score</option>
					<option value="-timestamp">Newest</option>
				</select>
			</div>
		)
	}

	renderPosts = () => {
		const { posts, postsSortOrder } = this.props

		if (!posts.length) {
			return <li className="list-group-item">No posts found.</li>
		}

		posts.sort(sortBy(postsSortOrder))

		return posts.map(post =>
			<PostsListItem key={post.id} post={post} />
		);
	}

  render() {
		const { isNewPostModalOpen, categories, category } = this.props

    return (
			<div>
				<div className="sort-form">
					<form>
						{this.renderSortSelect()}
					</form>
				</div>
				<ul className="list-group" style={{marginTop:'30px'}}>
					{this.renderPosts()}
				</ul>
				<Modal
					className='mod-content'
					overLayClassName='mod-overlay'
					isOpen={isNewPostModalOpen}
					onRequestClose={this.closePostModal}
					contentLabel='Modal'
				>
					{isNewPostModalOpen && <PostForm categories={categories} currentCategory={category} />}
				</Modal>
			</div>
    )
  }
}

function mapStateToProps({
	posts,
	postsSortOrder,
	postComments,
	isPostModalOpen,
	categories
}) {
	return {
		posts,
		postsSortOrder,
		postComments,
		categories,
		isNewPostModalOpen: isPostModalOpen,
	}
}

export default connect(mapStateToProps, {
	fetchPosts,
	setPostsSortOrder,
	fetchPostComments,
	setCurrentCategory,
	openPostModal,
	closePostModal,
	fetchCategories
 })(PostsList)
