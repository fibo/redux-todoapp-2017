import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import TodoItem from './TodoItem';

import { fetchTodosIfNeeded } from '../actions';

class Root extends React.Component {
  componentDidMount () {
    this.props.fetchTodosIfNeeded()
  }

  render () {
    const {
      activeTodoCount,
      completedTodoCount,
      onClearCompleted,
      todos,
      title
    } = this.props

    return (
      <section className='todoapp'>
        <div>
          <header className='header'>
            <h1>{title}</h1>
            <input
              className='new-todo'
              placeholder='What needs to be done?'
              autoFocus={true}
            />
          </header>

          <section className='main'>
            <input
              className='toggle-all'
              type='checkbox'
            />
            <ul className='todo-list'>
            {todos.list.map(todo => (
              <TodoItem key={todo.id}
                text={todo.text}
              />
            ))}
            </ul>
          </section>
          {(activeTodoCount || completedTodoCount) ? (
            <Footer
              activeTodoCount={activeTodoCount}
              completedTodoCount={completedTodoCount}
              onClearCompleted={onClearCompleted}
            />
          ) : null}
        </div>
      </section>
    )
  }
}

Root.propTypes = {
  activeTodoCount: PropTypes.number.isRequired,
  completedTodoCount: PropTypes.number.isRequired,
  fetchTodosIfNeeded: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  todos: PropTypes.shape({
    list: PropTypes.array.isRequired
  }).isRequired
}

Root.defaultProps = {
  activeTodoCount: 0,
  completedTodoCount: 0,
  fetchTodosIfNeeded: Function.prototype,
  onClearCompleted: Function.prototype,
  title: 'Todo app',
  todos: { list: [] }
}

export default Root
