import { ImageRegular } from '../App/App.types';
export interface ImageGalleryProps {
    openModal: () => void;
    data: ImageRegular[];
    afterOpenModal: (item: ImageRegular) => void;
}
