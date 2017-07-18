import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class Root extends React.Component {
  componentDidMount () {
    const {
      fetchTodosIfNeeded
    } = this.props

    fetchTodosIfNeeded()
  }

  render () {
    const {
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
              {todos.map((todo, i) => <TodoItem key={i} />)}
            </ul>
          </section>
        </div>
      </section>
    )
  }
}

Root.propTypes = {
  fetchTodosIfNeeded: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired
}

Root.defaultProps = {
  fetchTodosIfNeeded: Function.prototype,
  title: 'Todo app',
  todos: []
}

export default Root
