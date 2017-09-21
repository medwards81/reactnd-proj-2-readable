import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'

const PostDetailHeader = (props) => {
	const prevPage = props.currentCategory === 'ALL' ? '/' : `/r/${props.currentCategory}/posts`

	return (
    <div className="category-header panel panel-default">
      <div className="panel-body">
				<span className="back-arrow">
					<Link to={prevPage} title="Back">
						<ArrowLeft size={20} />
					</Link>
				</span>
				<span className="category">Tell Me More</span>
      </div>
    </div>
  )
}

export default PostDetailHeader
