import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },

        removeTodos: (state, action) => {
            state = state.filter(item => item.id !== action.payload);
            return state;
        },

        editTodos: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item
                    }
                }
                return todo;
            });
        },

        clearTodos: (state, action) => {
            if (state.length > 0) {
                state.splice(0, state.length);
            }
        },

        completeTodos: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true
                    };
                }
                return todo;
            });
        }
    }
});

export const {
    addTodos,
    removeTodos,
    editTodos,
    clearTodos,
    completeTodos
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;