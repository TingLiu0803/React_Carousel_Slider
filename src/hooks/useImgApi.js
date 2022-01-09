import { useState, useEffect } from "react";

export const useImgApi = () => {
  const [imgStates, setImgStates] = useState([]);

  const fetchImgInfo = () => {
    fetch("./slider-data.json")
      .then((res) => res.json())
      .then((data) => setImgStates(data))
      .catch((err) => new Error());
  };

  useEffect(() => {
    fetchImgInfo();
  }, []);

  return {
    imgStates,
    setImgStates
  };
};
