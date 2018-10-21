import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <Input inputRef={node => input = node} className="mainInput"/>
        <Button variant="contained" color="primary" type="submit">
          Add Step
        </Button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
