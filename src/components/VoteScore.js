import React, { Component } from 'react'
import CaretUp from 'react-icons/lib/fa/caret-up'
import CaretDown from 'react-icons/lib/fa/caret-down'

class VoteScore extends Component {
	decrementVoteScore() {
		this.props.decrementVoteScorePost(this.props.id)
	}

	incrementVoteScore() {
		this.props.incrementVoteScorePost(this.props.id)
	}

	render() {
		const settings = {
			color: this.props.color || '#001f3f',
			size: this.props.size || 25
		}

		return (
			<div className="vote-score-wrapper">
				<div className="vote-score-up" title="up vote">
					<CaretUp size={settings.size} color={settings.color} />
				</div>
				<div className="vote-score">
					{this.props.score}
				</div>
				<div className="vote-score-down" title="down vote">
					<CaretDown size={settings.size} color={settings.color} />
				</div>
			</div>
		)
	}
}

export default VoteScore
