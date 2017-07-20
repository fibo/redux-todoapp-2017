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

    case 'TOGGLE_FILTER':
      switch (action.name) {
        case 'active':
          return Object.assign({},
            state,
            {
              filter: {
                active: !state.filter.active,
                all: false,
                completed: false
              }
            }
          )

        case 'all':
          return Object.assign({},
            state,
            {
              filter: {
                active: false,
                all: !state.filter.all,
                completed: false
              }
            }
          )

        case 'completed':
          return Object.assign({},
            state,
            {
              filter: {
                active: false,
                all: false,
                completed: !state.filter.completed
              }
            }
          )
      }

    default:
      return state
  }
}
