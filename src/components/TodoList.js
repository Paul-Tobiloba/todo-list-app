import React, { useState } from 'react';
import { Icon, List, Tabs, TabList, Tab, } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, toggleTodos, editTodos, clearTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { ActiveIcon, DoneIcon, AllListIcon } from '../assets/icons/Icon';


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
        <Tabs isFitted variant="enclosed">
            <TabList mb="1em" className="buttons"  height="15%">
                <Tab onClick={
                    () => setSort('active')}
                ><Icon as={ActiveIcon} m="1" />Active</Tab>
                <Tab onClick={
                    () => setSort('completed')
                } ><Icon as={DoneIcon} m="1" /> Completed</Tab>
                <Tab onClick={
                    () => setSort('all')
                }><Icon as={AllListIcon} /> All</Tab>
            </TabList>
            <List spacing={3} maxHeight="60vh" height="60vh" overflowY="scroll" >
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
        </Tabs>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
