import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'

const CategoryHeader = (props) => {
    return (
      <div className="category-header panel panel-default">
        <div className="panel-body">
					<span className="back-arrow">
						<Link to="/" title="Back">
							<ArrowLeft size={20} />
						</Link>
					</span>
					<span className="category">r/{props.category}</span>
        </div>
      </div>
    )
}

export default CategoryHeader
