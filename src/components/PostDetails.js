import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageNotFound from './PageNotFound'
import { fetchPostDetails, fetchPostDetailComments, setCurrentPost } from '../actions'
import PostDetailHeader from './PostDetailHeader'
import PostDetail from './PostDetail'

class PostDetails extends Component {
	componentDidMount() {
		const { id } = this.props.match.params
		this.props.fetchPostDetails(id)
		this.props.fetchPostDetailComments(id)
		this.props.setCurrentPost(id)
	}

	render () {
		const { postDetails, currentCategory } = this.props

		if (!postDetails.id) return <PageNotFound />

		return (
			<div>
					<PostDetailHeader currentCategory={currentCategory} />
					<PostDetail post={postDetails} history={this.props.history} />
			</div>
		)
	}
}

function mapStateToProps({ postDetails, currentCategory }) {
	return {
		postDetails,
		currentCategory
	}
}

export default connect(mapStateToProps, { fetchPostDetails, fetchPostDetailComments, setCurrentPost })(PostDetails)
