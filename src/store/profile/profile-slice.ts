import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileType } from 'utils/types/profile-type';

interface ProfileState extends ProfileType {}

const initialState: ProfileState = {
    id: '',
    name: '',
    avatar: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<ProfileType>) => {
            state = action.payload;
        },
        reset: (state) => {
            state = initialState;
        },
    },
});

export const { set, reset } = profileSlice.actions;

export default profileSlice.reducer;
