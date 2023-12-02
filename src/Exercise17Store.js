import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice of the state
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: state => { state.count += 1; },
        decrement: state => { state.count -= 1; }
    }
});

export const { increment, decrement } = counterSlice.actions;

// Configure the store
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export default store;
