import "./styles.css";
import { title } from "../shared/constants";
import { useImgApi } from "../hooks/useImgApi";
import { useState, useEffect } from "react";
import Image from "../Image/index";

const Carousel = () => {
// build a scalable custom hook for api calls
// it also avoid messy code that reduce the code readability
  const { imgStates } = useImgApi();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
// a flag to decide what image to display
  const [isHideModal, setIsHideModal] = useState(true);

// avoid hitting the non exsisting images based on image id from json data
// make use of the side effect
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
