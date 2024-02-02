import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ImageSelectedState {
    index: number;
}

const initialState: ImageSelectedState = {
    index: 0,
};

const imageSelectedSlice = createSlice({
    name: 'imageSelected',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<number>) => {
            state.index = action.payload;
        },
        increment: (state) => {
            state.index += 1;
        },
        decrement: (state) => {
            state.index -= 1;
        },
        reset: (state) => {
            state = initialState;
        },
    },
});

export const { set, reset, increment, decrement } = imageSelectedSlice.actions;

export default imageSelectedSlice.reducer;
