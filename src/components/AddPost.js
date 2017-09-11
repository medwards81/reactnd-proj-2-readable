import React from 'react'
import { Link } from 'react-router-dom'

const AddPost = (props) => {
  return (
    <div className="add-post">
      <Link to="/posts/add" title="Add a Post">Add a Post</Link>
    </div>
  )
}

export default AddPost
