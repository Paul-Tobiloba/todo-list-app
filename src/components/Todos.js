import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos, removeTodos, editTodos, clearTodos, completeTodos } from '../redux/reducer';
import { Button, Input, InputGroup, Icon, useToast } from '@chakra-ui/react';
import { ClearAllIcon, AddIcon } from '../assets/icons/Icon';

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        editTodo: (obj) => dispatch(editTodos(obj)),
        clearTodos: () => dispatch(clearTodos()),
        completeTodo: (id) => dispatch(completeTodos(id))
    }
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");

    const toast = useToast();

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = () => {
        // e.preventDefault();
        if (todo === "") {
            setError("Please enter a todo");
            toast({
                    position: 'top',
                    title: 'Please enter a todo',
                    description: '',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                });
            return;
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
            {props.todos.length > 0 ? <Button
                onClick={() => props.clearTodos()}
                aria-label="clear all todos"
                leftIcon={<Icon as={ClearAllIcon} />}
                variant="outline"
                color="red.500"
                size="md"
                m=".3em"
                colorScheme="red"
                borderRadius="md"
            >Clear All</Button> : null}
            <InputGroup>
                <Input type="text"
                    placeholder="Add Todos"
                    className="todo-input"
                    onChange={(e) => handleChange(e)}
                    value={todo}
                    name="todo"
                    borderColor="gray.300"
                />
                <Button className="todo-button"
                    type="submit"
                    onClick={() => handleSubmit()}
                    aria-label="add todo"
                    size="md"
                    ml="1em"
                    colorScheme="purple"
                    isInvalid={error !== ""}
                ><Icon as={AddIcon} /></Button>
            </InputGroup>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
