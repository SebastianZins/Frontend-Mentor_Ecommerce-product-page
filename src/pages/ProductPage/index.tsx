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

    const [imgIndexVisible, setImgIndexVisible] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState<null | number>(-1);

    // handler function
    const handleShowNextImage = () => {
        if (selectedProduct !== undefined) {
            if (imgIndexVisible + 1 === selectedProduct?.images.length - 1) {
                setBtnDisabled(1);
                setImgIndexVisible(imgIndexVisible + 1);
            } else if (
                imgIndexVisible + 1 <
                selectedProduct?.images.length - 1
            ) {
                setBtnDisabled(null);
                setImgIndexVisible(imgIndexVisible + 1);
            }
        } else {
            return;
        }
    };
    const handleShowPrevImage = () => {
        if (selectedProduct !== undefined) {
            if (imgIndexVisible - 1 === 0) {
                setBtnDisabled(-1);
                setImgIndexVisible(imgIndexVisible - 1);
            } else if (imgIndexVisible - 1 > 0) {
                setBtnDisabled(null);
                setImgIndexVisible(imgIndexVisible - 1);
            }
        } else {
            return;
        }
    };

    console.log(btnDisabled, imgIndexVisible);

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
            {selectedProduct.images.map((img, i) => {
                return (
                    <img
                        src={getProductImage(selectedProduct.id, img)}
                        alt={'Product image | ' + selectedProduct.name}
                        key={img.file_name}
                        className={
                            'image ' + (i === imgIndexVisible ? '' : 'hidden')
                        }
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
                        <div
                            className={
                                'arrow-button prev' +
                                (btnDisabled === -1 ? ' disabled' : '')
                            }
                            onClick={handleShowPrevImage}
                        >
                            <img
                                src={icon_prev}
                                alt='button: show previous product pic'
                                className='image'
                            />
                        </div>
                        <div
                            className={
                                'arrow-button next' +
                                (btnDisabled === 1 ? ' disabled' : '')
                            }
                            onClick={handleShowNextImage}
                        >
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
