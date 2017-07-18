import initialState from '../store/initialState'

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS_FAILURE':
      return state

    case 'FETCH_TODOS_REQUEST':
      return state

    case 'FETCH_TODOS_SUCCESS':
      return Object.assign({},
        state,
        {
          todos: {
            list: action.data,
            when_fetched: (new Date()).toString()
          }
        }
      )

    default:
      return state
  }
}
