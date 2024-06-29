import Modal from 'react-modal';
import css from './ImageModal.module.css';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
    overflow: 'visible',
  },
};
Modal.setAppElement('#root');
const ImageModal = ({
  modalIsOpen,
  closeModal,
  item: {
    alt_description,
    likes,
    urls: { regular },
  },
}) => {
  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={regular} alt={alt_description} />
      <div className={css['container-text']}>
        <p className={css.text}>Description: {alt_description}</p>
        <p className={css.text}>Likes: {likes}</p>
      </div>
    </Modal>
  );
};
export default ImageModal;
