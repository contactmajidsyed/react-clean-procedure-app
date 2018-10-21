import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo';
import './CompletedTable.css'
class CompletedTodoList extends React.Component {
    render() {
        return (
            <table class="completedTable">
            {(this.props.completedTodos[0]) ? <th>Completed Steps</th>: ""}
                {this.props.completedTodos.map((todo) =>
                    <tr  key={todo.id} ><td key={todo.id}><Todo
                        key={todo.id}
                        {...todo}/>
                    </td></tr>
                )}
            </table>
        );
    }
}

CompletedTodoList.propTypes = {
    completedTodos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default CompletedTodoList;
