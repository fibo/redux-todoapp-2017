import React from 'react'
import PropTypes from 'prop-types'

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
      <div>
        <h1>{title}</h1>
        <h2>ToDo</h2>
        <ul>
          {todos.map(
            (item, i) => (
              <li key={i}>
                {item.content}
              </li>
            )
          )}
        </ul>
      </div>
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
