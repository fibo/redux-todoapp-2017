import fetch from 'isomorphic-fetch'

const baseURL = 'http://localhost:3000'

const headersJSON = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})

const checkStatus = (response) => {
  if (response.ok) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function fetchTodos () {
  return (dispatch) => {
    dispatch({ type: 'FETCH_TODOS_REQUEST' })

    const headers = headersJSON()
    const endpoint = `${baseURL}/todos`

    return fetch(endpoint, { headers })
      .then(checkStatus)
      .then(response => response.json())
      .then(data => {
        dispatch({ data, type: 'FETCH_TODOS_SUCCESS' })
      })
      .catch(error => {
        dispatch({ error, type: 'FETCH_TODOS_FAILURE' })
      })
  }
}

export function fetchTodosIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchTodos(getState())) {
      return dispatch(fetchTodos())
    }
  }
}

function shouldFetchTodos ({ todos }) {
  return todos.when_fetched === null
}

export function toggleFilter (name) {
  return {
    type: 'TOGGLE_FILTER',
    name
  }
}
