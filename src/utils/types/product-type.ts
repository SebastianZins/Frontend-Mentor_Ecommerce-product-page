import { ImageType } from './image-type';

export interface ProductType {
    id: string;
    company: string;
    name: string;
    description: string;
    price_Dollar: number;
    is_reduced: boolean;
    discound_total: number;
    discount_percentage: number;
    images: ImageType[];
    images_thumbnail: ImageType[];
}
