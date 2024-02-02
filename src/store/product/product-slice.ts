import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductType } from 'utils/types/product-type';

interface ProductState extends ProductType {}

const initialState: ProductState = {
    id: '',
    company: '',
    name: '',
    description: '',
    price_Dollar: 0,
    is_reduced: false,
    discount_total: 0,
    discount_percentage: 0,
    images: [],
    images_thumbnail: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<ProductType>) => {
            state = action.payload;
        },
        reset: (state) => {
            state = initialState;
        },
    },
});

export const { set, reset } = productSlice.actions;

export default productSlice.reducer;
