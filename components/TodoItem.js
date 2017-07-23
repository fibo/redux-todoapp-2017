import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = { editText: '' }
  }

  handleChange () {

  }

  handleEdit () {

  }

  handleKeyDown () {

  }

  handleSubmit () {

  }

  render () {
    const {
      onDestroy,
      onToggle,
      todo
    } = this.props;

    const {
      editText
    } = this.state;

    const editing = false; // TODO

    const {
      completed,
      text
    } = todo;

    const handleChange = this.handleChange.bind(this);
    const handleEdit = this.handleEdit.bind(this);
    const handleKeyDown = this.handleKeyDown.bind(this);
    const handleSubmit = this.handleSubmit.bind(this);

    return (
      <li className={classNames({ completed, editing })}>
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={completed}
            onChange={onToggle}
          />
          <label onDoubleClick={handleEdit}>{text}</label>
          <button
            className='destroy'
            onClick={onDestroy}
          />
        </div>
        <input
          ref={(domElement) => { this.editField = domElement; }}
          className='edit'
          value={editText}
          onBlur={handleSubmit}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </li>
    )
  };
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDestroy: Function.prototype,
  onToggle: Function.prototype
};
