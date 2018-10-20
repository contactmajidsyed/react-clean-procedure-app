import { connect } from 'react-redux'
import CompletedTable from '../components/CompletedTable'

const getCompletedTodos = (todos) => {
    return todos.filter(t => t.completed)
}

const mapStateToProps = state => ({
  completedTodos: getCompletedTodos(state.todos)
})


export default connect(
  mapStateToProps
)(CompletedTable)
