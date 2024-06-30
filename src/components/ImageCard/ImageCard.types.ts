import { ImageRegular } from '../App/App.types';

export interface ImageCardProps {
    item: ImageRegular;
    openModal: () => void;
    afterOpenModal: (item: ImageRegular) => void;
}
