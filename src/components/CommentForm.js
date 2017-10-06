import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { openCommentModal, closeCommentModal, fetchPostDetailComments, createComment, updateComment } from '../actions'

class CommentForm extends Component {
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

	onSubmit(values) {
			const { id, body } = values
			const { currentCommentEdit, postId } = this.props
			if (currentCommentEdit.id !== undefined) {
				this.props.updateComment(id, {body}, () => {
					this.props.closeCommentModal()
					this.props.fetchPostDetailComments(postId)
				});
			}
			else {
				this.props.createComment(values, postId, () => {
					this.props.closeCommentModal()
					this.props.fetchPostDetailComments(postId)
				});
			}
	}

	render() {
	  const { handleSubmit, submitting, closeCommentModal, currentCommentEdit: { id } } = this.props
	  return (
			<div>
				<h3>{id ? 'Edit' : 'Add'} Comment</h3>
		    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					{id ? null : <Field name="author" type="text" component={this.renderTextField} label="Author" />}
		      <Field name="body" type="text" component={this.renderTextField} label="Content" />
		      <div>
						<button className="btn btn-sm btn-default form-cancel-btn" type="button" onClick={() => closeCommentModal()}>
		          Cancel
		        </button>
						&nbsp;
		        <button className="btn btn-sm btn-primary" type="submit" disabled={submitting}>
		          {id ? 'Update' : 'Add Comment'}
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
  if (!values.body) {
    errors.body = '*Required'
  }
  return errors
}

const mapStateToProps = (state, ownProps) => {
	return {
		initialValues: state.currentCommentEdit,
		currentCommentEdit: state.currentCommentEdit
	}
}

export default connect(mapStateToProps, { openCommentModal, closeCommentModal, fetchPostDetailComments, createComment, updateComment })(reduxForm({
	form: 'commentForm',
	validate
})(CommentForm))
