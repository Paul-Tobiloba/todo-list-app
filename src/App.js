import React from 'react';
import { Container, Divider } from '@chakra-ui/layout';

import Todos from './components/Todos';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';


function App(props) {
    return (
        <Container
            width={{ base: "100%", md: "25rem" }} margin="0 auto" height={{ base: "100vh", md: "94vh" }}
            borderRadius={{ base: "0px", md: "15px" }} boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            padding="1em" display="flex" flexDirection="column" bg="gray.50" color="black"
            alignItems="center" justifyContent="space-between" overflow="hidden">
            <Header />
            <Divider my="2" />
            <Main>
                <TodoList />
            </Main>
            <Footer>
                <Todos />
            </Footer>
        </Container>
    );
}

export default App;
