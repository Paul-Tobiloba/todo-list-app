import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';

import store from './redux/store';
import theme from './theme';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

