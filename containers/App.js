import Root from '../components/Root'
import { connect } from 'react-redux'
import {
  fetchTodosIfNeeded
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, { api }) => {
  return {
    fetchTodosIfNeeded: () => {
      dispatch(fetchTodosIfNeeded(api))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
