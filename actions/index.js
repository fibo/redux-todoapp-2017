import fetch from 'isomorphic-fetch'

const checkStatus = (response) => {
  if (response.ok) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function fetchTodos (api) {
  return (dispatch) => {
    const { receiveData, responseFailure } = prepareRequest(dispatch, 'FETCH_TODOS')

    const baseURL = api.baseURL
    const headers = headersJSON(api.token)
    const endpoint = `${baseURL}/todo/list`

    return fetch(endpoint, { headers })
      .then(checkStatus)
      .then(response => response.json())
      .then(data => dispatch({ data, type: 'FETCH_TODOS_SUCCESS' }))
      .catch((error) => dispatch({ error, type: 'FETCH_TODOS_FAILURE' }))
  }
}

export function fetchTodosIfNeeded (api) {
  return (dispatch, getState) => {
    if (shouldFetchTodos(getState())) {
      return dispatch(fetchTodos(api))
    }
  }
}

function shouldFetchTodos ({ todos }) {
  return (todos.when_fetched === null)
}
