import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { fetchPictureFromGallery } from '../Api/Api';
import { ImageRegular } from './App.types';

function App() {
    const [pictures, setPictures] = useState<ImageRegular[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [imageRegular, setImageUrl] = useState<ImageRegular | null>(null);

    const scrollToBottom = (): void => {
        scroll.scrollToBottom();
    };
    function openModal(): void {
        setIsOpen(true);
    }
    function afterOpenModal(item: ImageRegular): void {
        setImageUrl(item);
    }
    function closeModal(): void {
        setIsOpen(false);
    }

    useEffect(() => {
        async function fetchPicture() {
            if (searchQuery === '') {
                return;
            }
            try {
                setLoading(true);
                setError(false);
                const fetch = await fetchPictureFromGallery(searchQuery, page);
                setPictures(prevState => [...prevState, ...fetch]);
            } catch {
                throw setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPicture();
    }, [page, searchQuery]);

    const handlerSearch = async (topic: string): Promise<void> => {
        setSearchQuery(topic);
        setPage(1);
        setPictures([]);
    };
    const handlerLoadMore = async (): Promise<void> => {
        setPage(page + 1);
        scrollToBottom();
    };

    return (
        <>
            <SearchBar onSearch={handlerSearch} />
            {loading && <Loader />}
            {error && <ErrorMessage />}
            {pictures.length > 0 && (
                <ImageGallery
                    openModal={openModal}
                    data={pictures}
                    afterOpenModal={afterOpenModal}
                />
            )}
            {pictures.length > 0 && !loading && (
                <LoadMoreBtn onClick={handlerLoadMore} />
            )}
            {modalIsOpen && (
                <ImageModal
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    item={imageRegular}
                />
            )}
        </>
    );
}
export default App;
