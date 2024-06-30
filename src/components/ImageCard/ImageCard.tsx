import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';
const ImageCard: React.FC<ImageCardProps> = ({
    item,
    openModal,
    afterOpenModal,
}) => {
    const handlerOnClick = (): void => {
        openModal();
        afterOpenModal(item);
    };
    return (
        <>
            <img
                onClick={handlerOnClick}
                className={css.img}
                src={item.urls.small}
                alt={item.alt_description}
                width="300"
                height="200"
            />
        </>
    );
};
export default ImageCard;
