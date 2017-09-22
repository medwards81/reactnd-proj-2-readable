import React, { Component } from 'react'
import CaretUp from 'react-icons/lib/fa/caret-up'
import CaretDown from 'react-icons/lib/fa/caret-down'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submitVote } from '../actions'

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
		console.log('option', option)
		this.props.submitVote(this.props.id, this.props.type, option)
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

function mapStateToProps({ voteScores }, ownProps) {
	return {
		voteScoreModified: voteScores[ownProps.id]
	}
}

export default connect (mapStateToProps, { submitVote })(VoteScore)
