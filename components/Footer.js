import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Footer extends React.Component {
  render () {
    const {
      count,
      completedTodoCount,
      onClearCompleted
    } = this.props;

    const itemWord = count === 1 ? 'item' : 'items';

    return (
      <footer className='footer'>
        <span className='todo-count'>
          <strong>{count}</strong> {itemWord} left
        </span>
        <ul className='filters'>
          <li>
            <a
              href='#/'
              className={classNames({selected: true})}>
                All
            </a>
          </li>
          {' '}
          <li>
            <a
              href='#/active'
              className={classNames({selected: true})}>
                Active
            </a>
          </li>
          {' '}
          <li>
            <a
              href='#/completed'
              className={classNames({selected: true})}>
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
  onClearCompleted: PropTypes.func.isRequired
}

Footer.defaultProps = {
  activeTodoCount: 0,
  completedTodoCount: 0,
  onClearCompleted: Function.prototype
}
