import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import TodoItem from './TodoItem';

class Root extends React.Component {
  componentDidMount () {
    this.props.fetchTodosIfNeeded();
  }

  render () {
    const {
      activeTodoCount,
      addTodo,
      completedTodoCount,
      filter,
      onClearCompleted,
      onToggle,
      onEdit,
      title,
      todos,
      toggleActive,
      toggleAll,
      toggleCompleted
    } = this.props;

    return (
      <section className='todoapp'>
        <div>
          <header className='header'>
            <h1>{title}</h1>
            <input
              className='new-todo'
              placeholder='What needs to be done?'
              autoFocus={true}
              onKeyDown={(event) => {
                const target = event.target;
                const text = target.value;
                const key = event.key;

                if ((text !== '') && (key === 'Enter')) {
                  addTodo(text);
                  target.value = '';
                }
              }}
            />
          </header>

          <section className='main'>
            <input
              className='toggle-all'
              type='checkbox'
            />
            <ul className='todo-list'>
            {todos.list
              .filter(({ completed }) => {
                if (filter.completed) return completed;
                if (filter.active) return !completed;
                return true; // filter.all
              })
              .map((todo, i) => (
                <TodoItem key={i}
                  onDestroy={Function.prototype}
                  onEdit={onEdit(todo)}
                  onToggle={onToggle(todo)}
                  todo={todo}
                />
              ))
            }
            </ul>
          </section>
          {(activeTodoCount || completedTodoCount) ? (
            <Footer
              activeTodoCount={activeTodoCount}
              completedTodoCount={completedTodoCount}
              toggleActive={toggleActive}
              toggleAll={toggleAll}
              toggleCompleted={toggleCompleted}
              filter={filter}
              onClearCompleted={onClearCompleted}
            />
          ) : null}
        </div>
      </section>
    );
  }
}

Root.propTypes = {
  activeTodoCount: PropTypes.number.isRequired,
  addTodo: PropTypes.func.isRequired,
  completedTodoCount: PropTypes.number.isRequired,
  fetchTodosIfNeeded: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  todos: PropTypes.shape({
    list: PropTypes.array.isRequired
  }).isRequired
};

Root.defaultProps = {
  activeTodoCount: 0,
  addTodo: Function.prototype,
  completedTodoCount: 0,
  fetchTodosIfNeeded: Function.prototype,
  onClearCompleted: Function.prototype,
  title: 'Todo app',
  todos: { list: [] }
};

export default Root;
