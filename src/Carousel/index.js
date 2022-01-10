import "./styles.css";
import { title } from "../shared/constants";
import { useImgApi } from "../hooks/useImgApi";
import { useState, useEffect } from "react";
import Image from "../Image/index";

const Carousel = () => {
  const { imgStates } = useImgApi();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHideModal, setIsHideModal] = useState(true);

  useEffect(() => {
    if (currentImgIndex < 0) {
      setCurrentImgIndex(imgStates.length - 2);
    } else if (currentImgIndex >= imgStates.length - 1) {
      setCurrentImgIndex(0);
    }
  }, [currentImgIndex, imgStates]);

  const onClick = ({ target }) => {
    target.name === "left"
      ? setCurrentImgIndex(currentImgIndex - 1)
      : setCurrentImgIndex(currentImgIndex + 1);
  };

  const onWheel = (e) => {
    e.deltaY < 0
      ? setCurrentImgIndex(currentImgIndex - 1)
      : setCurrentImgIndex(currentImgIndex + 1);
  };

  const handleDisplayModal = ({ target }) => {
    setIsHideModal(!isHideModal);
  };
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      {imgStates.map((item, index) =>
        currentImgIndex === index ? (
          <Image
            key={index}
            index={index}
            item={item}
            isHideModal={isHideModal}
            handleDisplayModal={handleDisplayModal}
            onClick={onClick}
            onWheel={onWheel}
          />
        ) : (
          ""
        )
      )}
      {isHideModal ? <div className="dot_container">
        <span className="dot" name="left" onClick={onClick}></span>
        <span className="dot" name="middle"></span>
        <span className="dot" name="right" onClick={onClick}></span>
      </div> : ""}
    </div>
  );
};

export default Carousel;
