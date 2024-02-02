import { useEffect, useState } from 'react';
import PageLayout from 'components/PageLayout';

import { ProductType } from 'utils/types/product-type';
import { ProfileType } from 'utils/types/profile-type';

import './style.css';
import ImageViewerComponent from './ImageViewerComponent';
import ProductInfoComponent from './ProductInfoComponent';
import ProductInteractionComponent from './ProductInteractionComponent';

const productsEndpoint = 'data/products/products.json';
const profilesEndpoint = 'data/products/products.json';

function ProductPage({
    profileID,
    productID,
}: {
    profileID: string;
    productID: string;
}) {
    // define state variables
    const [productsData, setProductsData] = useState([]);
    const [profilesData, setProfilesData] = useState([]);
    const [profile, setProfile] = useState<ProfileType>();
    const [selectedProduct, setSelectedProduct] = useState<ProductType>();

    // load data for profiles and products
    useEffect(() => {
        (async () => {
            const data = await fetch(productsEndpoint).then((res) =>
                res.json()
            );

            setProductsData(data);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const data = await fetch(profilesEndpoint).then((res) =>
                res.json()
            );

            setProfilesData(data);
        })();
    }, []);

    // load data for used profile and selected product
    useEffect(() => {
        setProfile(
            productsData.find((item: ProfileType) => item.id === profileID)
        );
    }, [profileID, productsData]);

    useEffect(() => {
        setSelectedProduct(
            profilesData.find((item: ProductType) => item.id === productID)
        );
    }, [productID, profilesData]);

    return (
        <PageLayout
            content={
                <div>
                    <ImageViewerComponent selectedProduct={selectedProduct} />
                    <ProductInfoComponent selectedProduct={selectedProduct} />
                    <ProductInteractionComponent />
                </div>
            }
        />
    );
}

export default ProductPage;
