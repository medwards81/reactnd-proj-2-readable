import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageNotFound from './PageNotFound'
import { fetchPostDetails, fetchPostComments } from '../actions'
import PostDetailHeader from './PostDetailHeader'
import PostDetail from './PostDetail'

class PostDetails extends Component {
	componentDidMount() {
		const { id } = this.props.match.params

		this.props.fetchPostDetails(id)
		this.props.fetchPostComments(id)
	}

	render () {
		const { postDetails, postComments } = this.props

		if (!postDetails.id) return <PageNotFound />

		return (
			<div>
					<PostDetailHeader currentCategory={this.props.currentCategory} />
					<PostDetail post={postDetails} postComments={postComments} />
			</div>
		)
	}
}

function mapStateToProps({ postDetails, postComments, currentCategory }) {
	return {
		postDetails,
		postComments,
		currentCategory
	}
}

export default connect(mapStateToProps, { fetchPostDetails, fetchPostComments })(PostDetails)
