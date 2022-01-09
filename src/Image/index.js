import "./styles.css";

const Image = ({
  index,
  item,
  previous,
  handleDisplayModal,
  next,
  onClick,
  onWheel,
  isHideModal
}) => {
  return isHideModal ? (
    <div className={index === item.id - 1 ? "slid active" : "slid"} onWheel={onWheel}>
      <h3>{item.alt}</h3>
      <div className="img_container">
        <button className="left" name="left" onClick={onClick}>
          {previous}
        </button>
        <img
          src={item.image}
          alt={item.alt}
          className="imgs"
          onClick={handleDisplayModal}
          name={item.id}
        />
        <button className="right" name="right" onClick={onClick}>
          {next}
        </button>
      </div>
    </div>
  ) : (
    <div className="modal">
      <img
        src={item.image}
        alt={item.alt}
        className="modal_img"
        onClick={handleDisplayModal}
        name={item.id}
      />
    </div>
  );
};

export default Image;
