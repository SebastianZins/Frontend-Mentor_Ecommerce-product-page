import { ImageType } from 'utils/types/image-type';

export function getProductImage(productID: string, img: ImageType) {
    if (productID === undefined) {
        throw new Error('404: Product-object is empty');
    }

    if (img === undefined) {
        throw new Error('404: image does not exist');
    }

    return (
        'data/products/' +
        productID +
        '/' +
        img.file_name +
        '.' +
        img.file_extension
    );
}
