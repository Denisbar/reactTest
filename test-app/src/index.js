import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import App from "./App.js";

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const store = createStore(
    combineReducers({math: mathReducer, user: userReducer})
);

store.subscribe(() => {
    // console.log("Store updated!", store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('root'));