import './style.css';

import icon_next from 'images/icon-next.svg';
import icon_prev from 'images/icon-previous.svg';
import { useState } from 'react';
import { getProductImage } from 'services/get-product-image';
import { ProductType } from 'utils/types/product-type';

function ImageViewerComponent({
    selectedProduct,
}: {
    selectedProduct: ProductType | undefined;
}) {
    // define state variables
    const [imgIndexVisible, setImgIndexVisible] = useState(0);
    // handler function
    const handleShowNextImage = () => {
        if (selectedProduct !== undefined) {
            if (imgIndexVisible + 1 <= selectedProduct?.images.length - 1) {
                setImgIndexVisible(imgIndexVisible + 1);
            } else {
                setImgIndexVisible(0);
            }
        } else {
            return;
        }
    };
    const handleShowPrevImage = () => {
        if (selectedProduct !== undefined) {
            if (imgIndexVisible - 1 >= 0) {
                setImgIndexVisible(imgIndexVisible - 1);
            } else {
                setImgIndexVisible(selectedProduct.images.length - 1);
            }
        } else {
            return;
        }
    };

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
        <section className='product-images'>
            <div className='arrow-button-group'>
                <div
                    className='arrow-button prev'
                    onClick={handleShowPrevImage}
                >
                    <img
                        src={icon_prev}
                        alt='button: show previous product pic'
                        className='image'
                    />
                </div>
                <div
                    className='arrow-button next'
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
    );
}

export default ImageViewerComponent;
