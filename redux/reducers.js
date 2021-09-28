import { combineReducers } from 'redux'
import * as types from "../utils/types";
import {Actions} from "../utils/actions";

const initialSelectedItems=()=>{
    if(typeof window !="undefined"){
        let stored_items=localStorage.getItem('items');
        if (stored_items!==null || typeof stored_items !=="undefined"){
            stored_items=JSON.parse(stored_items);
            return stored_items.items;
    }else{return []}}else{return []}
}
const addItem=(state,payload)=>{
    let filtered_values=[...state]
    console.log('console',filtered_values.some((value, index, arr)=>value.name===payload.name))
    if(filtered_values.some((value, index, arr)=>value.name===payload.name)){
        filtered_values=state.filter(function (value, index, arr) {
            if (value.name === payload.name) {
                value.quantity += 1
                console.log(value)
                return value
            } else {
                return value
            }
        });
    }else{
        filtered_values.push({...payload, quantity: 1})
    }

    state=[...filtered_values]
    localStorage.setItem('items',JSON.stringify({items:state}));
    return state;
}
const removeItem=(state,payload)=>{
    let filtered_values=state.filter(function(value, index, arr){
        if (value.name===payload.name){
        }else {
            return value
        }
    });
    state=[...filtered_values]
    localStorage.setItem('items',JSON.stringify({items:state}));
    return state;
}
const decreaseItems=(state,payload)=>{
    let filtered_values=state.filter(function(value, index, arr){
        if (value.name===payload.name){
             value.quantity-=1
             return value
        }else {
            return value
        }
    });
    state=[...filtered_values]
    localStorage.setItem('items',JSON.stringify({items:state}));
    return state;
}
const increaseItems=(state,payload)=>{
    console.log("gell")
    let filtered_values=state.filter(function(value, index, arr){
        if (value.name===payload.name){
            value.quantity+=1
            return value
        }else {
            return value
        }
    });
    state=[...filtered_values]
    localStorage.setItem('items',JSON.stringify({items:state}));
    return state;}
const selectedItemsReducer = (state = initialSelectedItems(), { type,payload }) => {
    switch (type) {
        case types.ADD:
            return addItem(state,payload)
        case types.REMOVE:
            return removeItem(state,payload)
        case types.DECREASEQ:
            return decreaseItems(state,payload)
        case types.INCREASEQ:
            return increaseItems(state,payload)
        default:
            return state
    }
}

// INITIAL TIMER STATE
const initialUserState =()=>{
    if(typeof window !="undefined"){
        let user_state=localStorage.getItem('user');
        if (user_state!==null || typeof user_state !=="undefined"){
            return user_state
        }else{return Actions.Sign_Out}}else{return Actions.Sign_Out}
}

// TIMER REDUCER
const userReducer = (state = initialUserState, { type, payload }) => {
    switch (type) {
        case types.SIGN_OUT:
            state=Actions.Sign_Out
            return state
        case types.SIGN_IN:
            state=Actions.Sign_In
            return state
        default:
            return state
    }
}

// COMBINED REDUCERS
const reducers = {
    selectedItems: selectedItemsReducer,
    user: userReducer,
}

export default combineReducers(reducers)