export const  Actions={Sign_In:"Sign_In",Sign_Out:"Sign_out"};

import * as types from './types'


export const removeItem = (payload) => (dispatch)=> dispatch({
    type: types.REMOVE,
    payload: payload,
});

export const addItem = (payload) => (dispatch)=>
    dispatch({
    type: types.ADD,
    payload: payload,
});

export const loadLocal= (dispatch) => ( dispatch({
    type: types.ADD,
    payload: { light: false, ts: Date.now() },
}))
export const increaseQuantity =(payload) => (dispatch)=> dispatch({
    type: types.INCREASEQ,
    payload: payload
});

export const decreaseQuantity = (payload) => (dispatch)=>  dispatch({
    type: types.DECREASEQ,
    payload:payload
});
export const signIn = () => (dispatch)=>  dispatch({
    type: types.SIGN_IN
});
export const signOut = () => (dispatch)=>  dispatch({
    type: types.SIGN_OUT
});
