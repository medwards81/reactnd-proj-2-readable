import React, { Component } from 'react'
import CaretUp from 'react-icons/lib/fa/caret-up'
import CaretDown from 'react-icons/lib/fa/caret-down'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submitVotePost } from '../actions'

class PostVoteScore extends Component {
	static propTypes = {
		score: PropTypes.number,
		color: PropTypes.string,
		size: PropTypes.number
	}

	static defaultProps = {
		color: '#001f3f',
		size: 25
	}

	handleUpVote = () => {
		this.props.submitVotePost(this.props.id, 'upVote')
	}

	handleDownVote = () => {
		this.props.submitVotePost(this.props.id, 'downVote')
	}

	render() {
		const { score, color, size, voteScoreModified } = this.props

		return (
			<div className="vote-score-wrapper">
				<div onClick={this.handleUpVote} className="vote-score-up" title="up vote">
					<CaretUp size={size} color={color} />
				</div>
				<div className="vote-score">
					{
						! isNaN(voteScoreModified)
						? voteScoreModified
						: score
					}
				</div>
				<div onClick={this.handleDownVote} className="vote-score-down" title="down vote">
					<CaretDown size={size} color={color} />
				</div>
			</div>
		)
	}
}

function mapStateToProps({ postVoteScores }, ownProps) {
	return {
		voteScoreModified: postVoteScores[ownProps.id]
	}
}

export default connect (mapStateToProps, { submitVotePost })(PostVoteScore)
