import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ShowCompletedTable from '../containers/ShowCompletedTable';

const App = () => (
  <div>
    <AddTodo />
    <ShowCompletedTable/>
    <VisibleTodoList />
  </div>
)

export default App
