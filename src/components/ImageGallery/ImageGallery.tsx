import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';
const ImageGallery: React.FC<ImageGalleryProps> = ({
    openModal,
    data,
    afterOpenModal,
}) => {
    return (
        <ul className={css.container}>
            {data.map(item => {
                return (
                    <li className={css.item} key={item.id}>
                        <ImageCard
                            afterOpenModal={afterOpenModal}
                            openModal={openModal}
                            item={item}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
export default ImageGallery;
