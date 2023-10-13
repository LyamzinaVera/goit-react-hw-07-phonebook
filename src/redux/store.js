import { configureStore } from '@reduxjs/toolkit';
import { reducer as rootReducer } from './reduсer';

export const store = configureStore({
    reducer: rootReducer,
});