
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
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = (category) => {
	const url = (typeof categor !== undefined && category !== 'ALL')
		? `${apiURL}/${category}/posts`
		: `${apiURL}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
}

export const getPostComments = (id) =>
  fetch(`${apiURL}/posts/${id}/comments`, { headers })
    .then(res => res.json())

export const submitVotePost = (id, option) =>
  fetch(`${apiURL}/posts/${id}`, {
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          option: option
        })
  })
    .then(res => res.json())
    .then(res => ({
      [res.id]: res.voteScore
    }))

export const get = (bookId) =>
  fetch(`${apiURL}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${apiURL}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${apiURL}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${apiURL}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
