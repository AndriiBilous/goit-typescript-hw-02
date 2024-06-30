import css from './LoadMoreBtn.module.css';
import { LoadMoreProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ onClick }) => {
    return (
        <button className={css.btn} onClick={onClick}>
            Load more...
        </button>
    );
};

export default LoadMoreBtn;
