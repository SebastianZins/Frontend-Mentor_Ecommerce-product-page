import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProductLoadingState {
    loading: boolean;
}

const initialState: ProductLoadingState = {
    loading: false,
};

const productLoadingSlice = createSlice({
    name: 'productLoading',
    initialState,
    reducers: {
        change: (state) => {
            state.loading = !state.loading;
        },
        set: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        reset: (state) => {
            state = initialState;
        },
    },
});

export const { change, set, reset } = productLoadingSlice.actions;

export default productLoadingSlice.reducer;
