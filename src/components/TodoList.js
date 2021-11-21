import React, { useState } from 'react';
import { Button, Box, List } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, toggleTodos, editTodos, clearTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';


const mapStateToProps = (state) => {
    return {
        todos: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        toggleTodo: (id) => dispatch(toggleTodos(id)),
        editTodo: (obj) => dispatch(editTodos(obj)),
        clearTodos: () => dispatch(clearTodos()),
        completeTodo: (id) => dispatch(completeTodos(id))
    }
};

const TodoList = (props) => {
    const [sort, setSort] = useState('active');


    return (
        <Box className="displaytodos">
            <div className="buttons">
                <Button onClick={
                    () => setSort('active')
                } >Active</Button>
                <Button onClick={
                    () => setSort('completed')
                } >Completed</Button>
                <Button onClick={
                    () => setSort('all')
                }>All</Button>
            </div>
            <List spacing={3} >
            {props.todos.length > 0 && sort === 'active' ?
                    props.todos.map(item => {
                        return (
                            item.completed === false &&
                            (<TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                                completeTodo={props.completeTodo}
                            />)
                        )
                    }
                    ) : null}
                {props.todos.length > 0 && sort === 'completed' ?
                    props.todos.map(item => {
                        return (
                            item.completed === true &&
                            (<TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                                completeTodo={props.completeTodo}
                            />)
                        )
                    }
                    ) : null}
                {props.todos.length > 0 && sort === 'all' ?
                    props.todos.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    }
                    ) : null}
            </List>
        </Box>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
