import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { closePostModal, updatePost, fetchPostDetails } from '../actions'

class PostForm extends Component {
	renderTextField ({
	  input,
	  label,
	  type,
	  meta: { touched, error, warning }
	}) {
		const className = `form-group ${touched && error ? 'has-danger' : ''}`
		return (
		  <div className={className}>
		    <label className="form-control-label">
		      {label}
		    </label>
		    <div>
		      <input className="form-control" {...input} placeholder={label} type={type} />
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
			console.log('values', values)
			const { id, title, body } = values
			this.props.updatePost(id, {title, body}, () => {
				this.props.fetchPostDetails(id)
				this.props.closePostModal()
			});
	}

	render() {
	  const { handleSubmit, pristine, reset, submitting, closePostModal, categories, editPost } = this.props
	  return (
			<div>
				<h3>{editPost ? 'Edit' : 'Create'} Post</h3>
		    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
		      <Field name="title" type="text" component={this.renderTextField} label="Title" />
		      <Field name="body" type="text" component={this.renderTextField} label="Content" />
		      <div>
						<button className="btn btn-default form-cancel-btn" type="button" onClick={() => closePostModal()}>
		          Cancel
		        </button>
						&nbsp;
		        <button className="btn btn-primary" type="submit" disabled={submitting}>
		          {editPost ? 'Update' : 'Create'}
		        </button>
		      </div>
		    </form>
			</div>
	  )
	}
}

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = '*Required'
	}
  if (!values.body) {
    errors.body = '*Required'
  }
  return errors
}

const mapStateToProps = (state, ownProps) => {
	console.log('ownProps', ownProps)
	return {
		initialValues: ownProps.editPost ? ownProps.editPost : null
	}
}

export default connect(mapStateToProps, {closePostModal, updatePost, fetchPostDetails })(reduxForm({
	form: 'postForm',
	validate
})(PostForm))
