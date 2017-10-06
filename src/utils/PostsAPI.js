import uuidv1 from 'uuid/v1'
import { handleFetchErrors } from './errors'

const apiURL = 'http://localhost:3001'

// Generate a unique token for accessing the apiURL server
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${apiURL}/categories`, { headers })
		.then(handleFetchErrors)
    .then(res => res.json())
    .then(data => data.categories)
		.catch(error => console.log(error))

export const getPosts = (category) => {
	const url = (typeof category !== undefined && category !== 'ALL')
		? `${apiURL}/${category}/posts`
		: `${apiURL}/posts`
  return fetch(url, { headers })
		.then(handleFetchErrors)
    .then(res => res.json())
		.catch(error => console.log(error))
}

export const getPostDetails = (id) =>
  fetch(`${apiURL}/posts/${id}`, { headers })
		.then(handleFetchErrors)
    .then(res => res.json())
		.catch(error => console.log(error))

export const getPostComments = (id) =>
  fetch(`${apiURL}/posts/${id}/comments`, { headers })
		.then(handleFetchErrors)
    .then(res => res.json())
		.catch(error => console.log(error))

export const submitVote = (id, type, option) =>
  fetch(`${apiURL}/${type}/${id}`, {
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          option: option
        })
  })
		.then(handleFetchErrors)
    .then(res => res.json())
    .then(res => ({
      [res.id]: res.voteScore
    }))
		.catch(error => console.log(error))

export const updatePost = (id, data) =>
  fetch(`${apiURL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
	.then(handleFetchErrors)
	.then(res => res.json())
	.catch(error => console.log(error))

export const createPost = (data) => {
	const { title, body, author, category  } = data
	var reqData = {
		id: uuidv1(),
		timestamp: Date.now(),
		title,
		body,
		author,
		category
	}
	return fetch(`${apiURL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqData)
  })
	.then(handleFetchErrors)
	.then(res => res.json())
	.catch(error => console.log(error))
}

export const deletePost = (id) =>
  fetch(`${apiURL}/posts/${id}`, {
    method: 'DELETE',
    headers: { ...headers }
  })
	.then(handleFetchErrors)
	.then(res => res)
	.catch(error => console.log(error))

export const createComment = (data, parentId) => {
	const { body, author } = data
	var reqData = {
		id: uuidv1(),
		timestamp: Date.now(),
		body,
		author,
		parentId
	}
	return fetch(`${apiURL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqData)
  })
	.then(handleFetchErrors)
	.then(res => res.json())
	.catch(error => console.log(error))
}

export const updateComment = (id, data) =>
  fetch(`${apiURL}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
	.then(handleFetchErrors)
	.then(res => res.json())
	.catch(error => console.log(error))

	export const deleteComment = (id) =>
	  fetch(`${apiURL}/comments/${id}`, {
	    method: 'DELETE',
	    headers: { ...headers }
	  })
		.then(handleFetchErrors)
		.then(res => res)
		.catch(error => console.log(error))
