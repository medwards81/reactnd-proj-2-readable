import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { closePostModal, updatePost, fetchPostDetails, createPost, fetchPosts } from '../actions'

class PostForm extends Component {
	renderTextField ({
	  input,
	  label,
	  type,
	  meta: { touched, error, warning },
		custProps = {}
	}) {
		const className = `form-group ${touched && error ? 'has-danger' : ''}`
 		const classNameInput = `form-control ${custProps.readonly === true ? 'disabled' : ''}`
		return (
		  <div className={className}>
		    <label className="form-control-label">
		      {label}
		    </label>
		    <div>
		      <input className={classNameInput} {...input} placeholder={label} type={type} {...custProps} />
		      {touched &&
		        ((error &&
		          <span>
		            {error}
		          </span>) ||
		          (warning &&
		            <span>
		              {warning}
		            </span>))}
		    </div>
		  </div>
		)
	}

	renderSelectBox ({
	  input,
	  label,
	  type,
	  meta: { touched, error, warning },
		currentCategory,
		categories = []
		}) {

		const className = `form-group ${touched && error ? 'has-danger' : ''}`
		const selVal = currentCategory === 'ALL' ? {} : {value: currentCategory}

		return (
		  <div className={className}>
		    <label className="form-control-label">
		      {label}
		    </label>
		    <div>
		      <select className="form-control" {...input} {...selVal}>
						<option value="">Select a category</option>
						{
							categories.map((category, i) =>
								<option key={i} value={category.name}>{category.name.toLowerCase()}</option>)
							}
						}
					</select>
		      {touched &&
		        ((error &&
		          <span>
		            {error}
		          </span>) ||
		          (warning &&
		            <span>
		              {warning}
		            </span>))}
		    </div>
		  </div>
		)
	}

	onSubmit(values) {
			const { id, title, body } = values
			if (this.props.editPost) {
				this.props.updatePost(id, {title, body}, () => {
					this.props.closePostModal()
					this.props.fetchPostDetails(id)
				});
			}
			else {
				this.props.createPost(values, () => {
					this.props.closePostModal()
					this.props.fetchPosts(this.props.currentCategory)
				});
			}
	}

	render() {
	  const { handleSubmit, submitting, closePostModal, editPost, currentCategory, categories } = this.props
	  return (
			<div>
				<h3>{editPost ? 'Edit' : 'Add'} Post</h3>
		    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					{editPost ? null : <Field name="author" type="text" component={this.renderTextField} label="Author" />}
		      <Field name="title" type="text" component={this.renderTextField} label="Title" />
		      <Field name="body" type="text" component={this.renderTextField} label="Content" />
					{editPost
						? null
						: currentCategory === 'ALL'
							? <Field name="category" type="select" component={this.renderSelectBox} label="Category" currentCategory={currentCategory} categories={categories} />
							: <Field name="category" type="text" component={this.renderTextField} label="Category" custProps={{value: currentCategory, readOnly: true}} />
					}
		      <div>
						<button className="btn btn-sm btn-default form-cancel-btn" type="button" onClick={() => closePostModal(true)}>
		          Cancel
		        </button>
						&nbsp;
		        <button className="btn btn-sm btn-primary" type="submit" disabled={submitting}>
		          {editPost ? 'Update' : 'Add Post'}
		        </button>
		      </div>
		    </form>
			</div>
	  )
	}
}

const validate = values => {
  const errors = {}
	if (!values.author) {
    errors.author = '*Required'
	}
	if (/\s+/.test(values.author)) {
		errors.author = '*Author cannot have white space'
	}
  if (!values.title) {
    errors.title = '*Required'
	}
  if (!values.body) {
    errors.body = '*Required'
  }
	if (!values.category) {
    errors.category = '*Required'
  }
  return errors
}

const mapStateToProps = (state, ownProps) => {
	return {
		initialValues: ownProps.editPost ? ownProps.editPost : {category: ownProps.currentCategory}
	}
}

export default connect(mapStateToProps, {closePostModal, updatePost, fetchPostDetails, createPost, fetchPosts })(reduxForm({
	form: 'postForm',
	validate
})(PostForm))
