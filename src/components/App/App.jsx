import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { fetchPictureFromGallery } from '../Api/Api';
function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageRegular, setImageUrl] = useState('');
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal(item) {
    setImageUrl(item);
  }
  function closeModal() {
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
        // setTotalFetch(fetch);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPicture();
  }, [page, searchQuery]);

  const handlerSearch = async topic => {
    setSearchQuery(topic);
    setPage(1);
    setPictures([]);
  };
  const handlerLoadMore = async () => {
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
