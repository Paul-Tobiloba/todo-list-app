import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos, removeTodos, toggleTodos, editTodos, clearTodos, completeTodos } from '../redux/reducer';
import { Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';


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

const Todos = (props) => {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");


    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = () => {
        // e.preventDefault();
        if (todo === "") {
            setError("Please enter a todo");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false
            });
            setTodo("");
        }
    }
    console.log(props);

    return (
        <div className="addTodos">
            <InputGroup>
                <InputLeftAddon children="Add Todo" />
                <Input type="text"
                    placeholder="Add Todos"
                    className="todo-input"
                    onChange={(e) => handleChange(e)}
                    value={todo}
                    name="todo"
                />
                <Button className="todo-button"
                    type="submit"
                    onClick={() => handleSubmit()}
                >Add</Button>
            </InputGroup>
            {error ? <p style={{
                color: "red",
                fontSize: "12px",
                marginTop: "1px",
            }} >{error}</p> : null}


            {props.todos.length > 0 ? <Button
                onClick={() => props.clearTodos()}
            >Clear Todos</Button> : null}

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
