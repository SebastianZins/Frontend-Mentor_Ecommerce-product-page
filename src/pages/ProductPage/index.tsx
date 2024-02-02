import { useSelector } from 'react-redux';

import PageLayout from 'components/PageLayout';
import ImageViewerComponent from './ImageViewerComponent';
import ProductInfoComponent from './ProductInfoComponent';
import ProductInteractionComponent from './ProductInteractionComponent';
import { RootState } from 'store/store';

import './style.css';
import { useEffect, useState } from 'react';
import { ProductType } from 'utils/types/product-type';

function ProductPage({
    profileID,
    productID,
}: {
    profileID: string;
    productID: string;
}) {
    // fetch data for (pseudo) selected product and profile

    const [selectedProduct, setSelectedProduct] = useState<ProductType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                await timeout(1000);
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

                setSelectedProduct(foundProduct);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <PageLayout
            content={
                <div>
                    <div className={'main' + (!loading ? 'is-loading' : '')}>
                        <ImageViewerComponent
                            selectedProduct={selectedProduct}
                        />
                        <ProductInfoComponent
                            selectedProduct={selectedProduct}
                        />
                        <ProductInteractionComponent />
                    </div>
                    <div
                        className={
                            'loading-screen' + (loading ? '' : ' hidden')
                        }
                    >
                        <div className={'loading-component'}>
                            <div className='spinner'></div>
                            <div className='spinner inner'></div>
                            <div className='stick'></div>
                            <div className='stick lower'></div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}

export default ProductPage;

function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
}
