import Root from '../components/Root'
import { connect } from 'react-redux'
import {
  fetchTodosIfNeeded
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  const todosList = state.todos.list;

  const activeTodoCount = todosList.reduce((accum, todo) => {
    return todo.completed ? accum : accum + 1;
  }, 0);

  return Object.assign({}, state, {
    activeTodoCount,
    completedTodoCount: todosList.length - activeTodoCount
  })
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodosIfNeeded() {
      dispatch(fetchTodosIfNeeded())
    },
    onClearCompleted() {
      // TODO
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
