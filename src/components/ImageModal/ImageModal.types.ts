import { ImageRegular } from '../App/App.types';
export interface ModalListProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    item: ImageRegular | null;
}
