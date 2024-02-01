import axios from 'axios';
import PageLayout from 'components/PageLayout';
import { useEffect, useState } from 'react';
import { ProductType } from 'utils/types/product-type';
import { ProfileType } from 'utils/types/profile-type';

function ProductPage({
    profileID,
    productID,
}: {
    profileID: string;
    productID: string;
}) {
    // define state variables
    const [profile, setProfile] = useState<ProfileType>();
    const [selectedProduct, setSelectedProduct] = useState<ProductType>();

    // load data for profile and selected product
    useEffect(() => {
        axios
            .get<ProfileType[]>('data/profiles/profiles.json')
            .then((response) => response.data)
            .then((responseData) => {
                setProfile(responseData.find((item) => item.id === profileID));
            });
    }, [profileID]);

    useEffect(() => {
        axios
            .get<ProductType[]>('data/products/products.json')
            .then((response) => response.data)
            .then((responseData) => {
                setSelectedProduct(
                    responseData.find((item) => item.id === productID)
                );
            });
    }, [productID]);

    const ImageViewer = (
        <section className='product-images'>
            <figure>asdasd</figure>
        </section>
    );

    return <PageLayout content={ImageViewer} />;
}

export default ProductPage;
