import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Arrow from './Arrow';

const TodoList = ({ todos, toggleTodo }) => (

  <div>
    {todos.map((todo, index) =>

      <span>
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id, index === 0)}
        />
        <Arrow stepNumber={index} totalSteps={todos.length}/>
      </span>
    )}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
