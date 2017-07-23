import Root from '../components/Root'
import { connect } from 'react-redux'
import {
  addTodo,
  deleteTodo,
  editTodo,
  fetchTodosIfNeeded,
  toggleFilter,
  toggleTodo,
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  const todosList = state.todos.list;

  const activeTodoCount = todosList.reduce((accum, todo) => {
    return todo.completed ? accum : accum + 1;
  }, 0);

  const completedTodos = todosList.filter(({ completed }) => completed);

  return Object.assign({}, state, {
    activeTodoCount,
    completedTodoCount: todosList.length - activeTodoCount,
    completedTodos,
  })
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo(text) {
      dispatch(addTodo({ text, completed: false }));
    },
    fetchTodosIfNeeded() {
      dispatch(fetchTodosIfNeeded());
    },
    onClearCompleted(todos) {
      console.log(todos)
      return function () {
        todos.forEach(todo => dispatch(deleteTodo(todo)));
      }
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
