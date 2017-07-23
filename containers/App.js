import Root from '../components/Root'
import { connect } from 'react-redux'
import {
  addTodo,
  fetchTodosIfNeeded,
  deleteTodo,
  editTodo,
  toggleFilter,
  toggleTodo,
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
    addTodo(text) {
      console.log(text)
      dispatch(addTodo({ text, completed: false }));
    },
    fetchTodosIfNeeded() {
      dispatch(fetchTodosIfNeeded());
    },
    onClearCompleted() {
      // TODO
    },
    onDestroy(todo) {
      return function () {
        dispatch(deleteTodo(todo))
      }
    },
    onEdit(todo) {
      return function (text) {
        dispatch(editTodo(todo, text))
      }
    },
    onToggle(todo) {
      return function () {
        dispatch(toggleTodo(todo))
      }
    },
    toggleActive() {
      dispatch(toggleFilter('active'));
    },
    toggleAll() {
      dispatch(toggleFilter('all'));
    },
    toggleCompleted() {
      dispatch(toggleFilter('completed'));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
