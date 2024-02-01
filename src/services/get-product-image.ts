import axios from 'axios';

export async function getProductImage({
    productID,
    imageName,
    imageExtension,
}: {
    productID: string;
    imageName: string;
    imageExtension: string;
}) {
    return await axios.get(
        'data/products/' + productID + imageName + '.' + imageExtension
    );
}
