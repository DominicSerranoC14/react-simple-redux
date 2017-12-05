'use strict';

import { createStore, combineReducers } from 'redux';

const visibilityReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // Passes in undefined as the individual todos state because it has not yet been added
            return [ ...state, todoReducer(null, action) ];
        case 'TOGGLE_TODO':
            return state.map(todo => todoReducer(todo, action));
        default:
            return state;  
    };
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action);
        case 'TOGGLE_TODO':
            return toggleTodo(state, action);
        default:
            return state;    
    }
};

// Should return only that todo. todosReducer handles spreading the array
const addTodo = (state, { id, text }) => ({ id, text, completed: false });

const toggleTodo = (state, { completed, id }) => {
    if (state.id !== id) {
        return state;
    }

    return { ...state, completed: !completed };
};

const todoApp = combineReducers({ todosReducer, visibilityReducer });

const store = createStore(todoApp);

console.log(store.getState());

store.dispatch({ type: 'ADD_TODO', id: 0, text: 'What\'s up' });
store.dispatch({ type: 'TOGGLE_TODO', id: 0, completed: false });
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'COMPLETED' });

console.log(store.getState());