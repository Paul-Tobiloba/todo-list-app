import React from 'react';
import { Box } from '@chakra-ui/layout';
import './App.css';
import Todos from './components/Todos';
import TodoList from './components/TodoList';

function App() {
    return (
        <Box className="app">
            <Todos />
            <TodoList />
        </Box>
    );
}

export default App;
