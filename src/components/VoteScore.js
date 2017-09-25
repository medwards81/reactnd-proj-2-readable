import React, { Component } from 'react'
import CaretUp from 'react-icons/lib/fa/caret-up'
import CaretDown from 'react-icons/lib/fa/caret-down'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submitVote, fetchPostDetailComments, fetchPosts } from '../actions'

class VoteScore extends Component {
	static propTypes = {
		type: PropTypes.string.isRequired,
		score: PropTypes.number,
		color: PropTypes.string,
		size: PropTypes.number,
	}

	static defaultProps = {
		color: '#001f3f',
		size: 25
	}

	handleVote = (option) => {
		const { id, type, submitVote, fetchPostDetailComments, currentPost, currentCategory } = this.props
		submitVote(id, type, option)
			.then(() => {
				if (type === 'comments') fetchPostDetailComments(currentPost)
				else if (type === 'posts') this.props.fetchPosts(currentCategory)
			})
	}

	render() {
		const { score, color, size, voteScoreModified } = this.props

		return (
			<div className="vote-score-wrapper">
				<div onClick={() => this.handleVote('upVote')} className="vote-score-up" title="up vote">
					<CaretUp size={size} color={color} />
				</div>
				<div className="vote-score">
					{
						! isNaN(voteScoreModified)
						? voteScoreModified
						: score
					}
				</div>
				<div onClick={() => this.handleVote('downVote')} className="vote-score-down" title="down vote">
					<CaretDown size={size} color={color} />
				</div>
			</div>
		)
	}
}

function mapStateToProps({ voteScores, currentPost, currentCategory }, ownProps) {
	return {
		voteScoreModified: voteScores[ownProps.id],
		currentPost,
		currentCategory
	}
}

export default connect (mapStateToProps, { submitVote, fetchPostDetailComments, fetchPosts })(VoteScore)
