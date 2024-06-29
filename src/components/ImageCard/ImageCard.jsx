import css from './ImageCard.module.css';
function ImageCard({ item, openModal, afterOpenModal }) {
  const handlerOnClick = () => {
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
}
export default ImageCard;
