import './style.css';

import icon_next from 'assets/icon-next.svg';
import icon_prev from 'assets/icon-previous.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getProductImage } from 'services/get-product-image';
import {
    decrement,
    increment,
    set,
} from 'store/imageSelected/image-selected-slice';
import { RootState } from 'store/store';
import { ProductType } from 'utils/types/product-type';

function ImageViewerComponent({
    selectedProduct,
}: {
    selectedProduct: ProductType | undefined;
}) {
    // get state variable
    const imageIndex = useSelector(
        (state: RootState) => state.imageSelected.index
    );
    const dispatch = useDispatch();

    // handler function
    const handleShowNextImage = () => {
        if (selectedProduct !== undefined) {
            if (imageIndex + 1 <= selectedProduct?.images.length - 1) {
                dispatch(increment());
            } else {
                dispatch(set(0));
            }
        } else {
            return;
        }
    };
    const handleShowPrevImage = () => {
        if (selectedProduct !== undefined) {
            if (imageIndex - 1 >= 0) {
                dispatch(decrement());
            } else {
                dispatch(set(selectedProduct.images.length - 1));
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
                            'image ' + (i === imageIndex ? '' : 'hidden')
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
