import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Footer extends React.Component {
  render () {
    const {
      activeTodoCount,
      completedTodoCount,
      filter,
      onClearCompleted,
      toggleActive,
      toggleAll,
      toggleCompleted,
    } = this.props;

    let itemMessage;

    if (activeTodoCount === 0) itemMessage = 'no item';
    if (activeTodoCount === 1) itemMessage = '1 item left';
    if (activeTodoCount > 1) itemMessage = `${activeTodoCount} items left`;

    return (
      <footer className='footer'>
        <span className='todo-count'>{itemMessage}</span>
        <ul className='filters'>
          <li>
            <a
              className={classNames({selected: filter.all})}
              onClick={toggleAll}
            >
              All
            </a>
          </li>
          {' '}
          <li>
            <a
              className={classNames({selected: filter.active})}
              onClick={toggleActive}
            >
              Active
            </a>
          </li>
          {' '}
          <li>
            <a
              className={classNames({selected: filter.completed})}
              onClick={toggleCompleted}
            >
              Completed
            </a>
          </li>
        </ul>
        {(completedTodoCount > 0) ? (
          <button
            className='clear-completed'
            onClick={onClearCompleted}>
            Clear completed
          </button>
        ) : null}
      </footer>
    )
  }
}

Footer.propTypes = {
  activeTodoCount: PropTypes.number.isRequired,
  completedTodoCount: PropTypes.number.isRequired,
  toggleActive: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}
