import { useDispatch, useSelector } from 'react-redux';
import { set as setProduct } from 'store/product/product-slice';
import { set as setProductLoading } from 'store/productLoading/product-loading-slice';
import { ProductType } from 'utils/types/product-type';
import { useEffect } from 'react';
import axios from 'axios';
import { loadavg } from 'os';
import { RootState } from 'store/store';

export function useFetchProductData({ productID }: { productID: string }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setProductLoading(true));

                const response = await fetch(
                    `${process.env.PUBLIC_URL}/data/products/products.json`
                );
                const resData = (await response.json()) as ProductType[];

                if (resData.length === 0) {
                    throw new Error('List of products is Empty!');
                }

                const foundProduct = resData.find((i) => i.id === productID);

                if (foundProduct === undefined) {
                    throw new Error('Product not found.');
                }

                dispatch(setProduct(foundProduct));
                dispatch(setProductLoading(false));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [dispatch, productID]);
    return;
}
