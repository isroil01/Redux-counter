
import {configureStore, createSlice} from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'counter',
    initialState: {counter: 0, showCounter: false},
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase (state,action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const authSlice = createSlice({
    name: 'Auth',
    initialState: {isAuthenticated: false},
    reducers: {
        logIn(state){
            state.isAuthenticated = true
        },

        logOut(state){
            state.isAuthenticated= false
        }
    }
})
/*
const counterStore = (state={counter: 0, showCounter: false},action) =>{
    if(action.type === 'Increment'){
        return {
            counter: state.counter +1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'Increase'){
        return{
            counter : state.counter + action.payload,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrement'){
        return{
            counter: state.counter -1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return{
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state;
};
*/



const store = configureStore({
    reducer: {counter:slice.reducer, auth: authSlice.reducer}
});

export const counterActions = slice.actions;
export const authAction = authSlice.actions;

export default store;

