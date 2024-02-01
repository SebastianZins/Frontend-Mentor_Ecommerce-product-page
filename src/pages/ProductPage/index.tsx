import { useEffect, useState } from 'react';
import { getProductImage } from 'services/get-product-image';
import PageLayout from 'components/PageLayout';

import { ProductType } from 'utils/types/product-type';
import { ProfileType } from 'utils/types/profile-type';

import './style.css';

import icon_next from 'images/icon-next.svg';
import icon_prev from 'images/icon-previous.svg';

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

    // image viewer component
    // load every image, for selected product
    const ImageViewer = selectedProduct !== undefined && (
        <figure>
            {selectedProduct.images.map((img) => {
                return (
                    <img
                        src={getProductImage(selectedProduct.id, img)}
                        alt={'Product image | ' + selectedProduct.name}
                        key={img.file_name}
                        className='image'
                    />
                );
            })}
        </figure>
    );

    return (
        <PageLayout
            content={
                <section className='product-images'>
                    <div className='arrow-button-group'>
                        <div className='arrow-button prev'>
                            <img
                                src={icon_prev}
                                alt='button: show previous product pic'
                                className='image'
                            />
                        </div>
                        <div className='arrow-button next'>
                            <img
                                src={icon_next}
                                alt='button: show next product pic'
                                className='image'
                            />
                        </div>
                    </div>
                    {ImageViewer}
                </section>
            }
        />
    );
}

export default ProductPage;
