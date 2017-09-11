import React, { Component } from 'react'
import CaretUp from 'react-icons/lib/fa/caret-up'
import CaretDown from 'react-icons/lib/fa/caret-down'

class VoteScorePost extends Component {
	decrementVoteScore() {
		this.props.decrementVoteScorePost(this.props.id)
	}

	incrementVoteScore() {
		this.props.incrementVoteScorePost(this.props.id)
	}

	render() {
		return (
			<span>
				<CaretUp size={20} />
				{this.props.id}
				<CaretDown size={20} />
			</span>
		)
	}
}

export default VoteScorePost
