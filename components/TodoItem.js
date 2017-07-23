import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editText: props.todo.text,
      editing: false
    };
  }

  handleChange (event) {
    this.setState({ editText: event.target.value });
  }

  handleEdit () {
    this.setState({ editing: true });
  }

  handleKeyDown (event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit () {
    console.log(this.state.editText)
    this.setState({ editing: false });
    this.props.onEdit(this.state.editText);
  }

  render () {
    const {
      onDestroy,
      onToggle,
      todo
    } = this.props;

    const {
      editText,
      editing
    } = this.state;

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
          <label onDoubleClick={completed ? null : handleEdit}>{text}</label>
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
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDestroy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};
