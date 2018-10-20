import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo';

class CompletedTodoList extends React.Component {
    render() {


        return (
            <table class="completedTable">
                {this.props.completedTodos.map((todo) =>
                    <div key={todo.id}><Todo
                        key={todo.id}
                        {...todo}/>
                    </div>
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
