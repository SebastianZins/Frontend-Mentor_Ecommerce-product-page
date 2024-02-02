import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counter-slice';
import profileSlice from './profile/profile-slice';
import productSlice from './product/product-slice';
import imageSelectedSlice from './imageSelected/image-selected-slice';
import productLoadingSlice from './productLoading/product-loading-slice';
import profileLoadingSlice from './profileLoading/profile-loading-slice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        profile: profileSlice,
        product: productSlice,
        imageSelected: imageSelectedSlice,
        productLoading: productLoadingSlice,
        profileLoading: profileLoadingSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
