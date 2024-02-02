import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProfileLoadingState {
    loading: boolean;
}

const initialState: ProfileLoadingState = {
    loading: false,
};

const profilLoadingSlice = createSlice({
    name: 'profileLoading',
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

export const { change, set, reset } = profilLoadingSlice.actions;

export default profilLoadingSlice.reducer;
