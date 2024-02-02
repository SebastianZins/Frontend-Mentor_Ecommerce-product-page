import { ProductType } from 'utils/types/product-type';

import './style.css';

function ProductInfoComponent({
    selectedProduct,
}: {
    selectedProduct: ProductType | undefined;
}) {
    if (selectedProduct === undefined) {
        return <></>;
    }

    let price = selectedProduct.price_Dollar;
    let discount = '';
    const oldPrice = selectedProduct.price_Dollar;

    if (selectedProduct.is_reduced) {
        if (selectedProduct.discount_percentage > 0) {
            price *= selectedProduct.discount_percentage / 100;
            discount += selectedProduct.discount_percentage + '%';
        } else {
            price -= selectedProduct.discound_total;
            discount += '- $' + selectedProduct.discound_total;
        }
    }

    return (
        <article>
            <p className='company'>{selectedProduct.company}</p>
            <h1 className='product-name'>{selectedProduct.name}</h1>
            <p className='description'>{selectedProduct.description}</p>
            <div className='price'>
                <div className='price-is'>
                    <p className='amount'>${price.toFixed(2)}</p>
                    <p className='discount'>{discount}</p>
                </div>
                <p className='price-was'>
                    <del>{price !== oldPrice ? '$' + oldPrice : ''}</del>
                </p>
            </div>
        </article>
    );
}

export default ProductInfoComponent;
