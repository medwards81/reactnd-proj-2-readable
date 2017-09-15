import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageNotFound from './PageNotFound'
import { fetchPostDetails, fetchPostComments } from '../actions'
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
					<PostDetail post={postDetails} />
			</div>
		)
	}
}

function mapStateToProps({ postDetails, postComments }) {
	return {
		postDetails,
		postComments
	}
}

export default connect(mapStateToProps, { fetchPostDetails, fetchPostComments })(PostDetails)
