import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Arrow from './Arrow';
import './TodoList.css'
class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) =>

          <span>
            <Todo
              key={todo.id}
              stepNumber={index}
              {...todo}
              onClick={() => this.props.toggleTodo(todo.id, index === 0)}
            />
            <Arrow stepNumber={index} totalSteps={this.props.todos.length} />
          </span>
        )}
      </div>
    )
  }
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
