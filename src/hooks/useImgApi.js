import { useState, useEffect } from "react";

// reusable hooks to grab the raw data from json file.
// It will help reduce the repeatitive code on the components that need to get data from json file

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
