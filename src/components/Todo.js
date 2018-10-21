import React from 'react'
import PropTypes from 'prop-types'
import "./Todo.css";
import classNames from 'classnames';

const Todo = ({ onClick, completed, text, stepNumber }) => {
  let blue = classNames({
    'blue': stepNumber ===0
  });
 return( <span
    onClick={onClick}
    className={blue}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {`${text}`}
  </span>
);
}

Todo.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
