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

export function addTodo (todo) {
  return dispatch => {
    dispatch({ type: 'ADD_TODO_REQUEST' })

    const headers = headersJSON()
    const endpoint = `${baseURL}/todos`
    const method = 'POST'
    const body = JSON.stringify(todo)

    return fetch(endpoint, { method, headers, body })
      .then(checkStatus)
      .then(response => response.json())
      .then(data => {
        dispatch({ data, type: 'ADD_TODO_SUCCESS' })
      })
      .catch(error => {
        dispatch({ error, type: 'ADD_TODO_FAILURE' })
      })
  }
}

function fetchTodos () {
  return dispatch => {
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
