import React, { useEffect, useState } from "react";
import {axiosWithAuth} from '../helpers/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const axios = axiosWithAuth();

  useEffect(() => {
    axios.get("http://localhost:5000/api/colors")
    .then(response => {
      setColorList(response.data)
    })
  }, []);

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
