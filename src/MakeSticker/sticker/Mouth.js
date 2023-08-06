import React from "react";
import { useSelector } from "react-redux";
import styles from "./Mouth.module.css";
import Mouth1 from "../image/mouth_image/mouth1-1.png";
import Mouth2 from "../image/mouth_image/mouth2-1.png";
import Mouth3 from "../image/mouth_image/mouth3-1.png";
import Mouth4 from "../image/mouth_image/mouth4-1.png";
import Mouth5 from "../image/mouth_image/mouth5-1.png";
import Mouth6 from "../image/mouth_image/mouth6-1.png";

const Mouth = () => {
  const mouth = useSelector((state) => {
    return state.sticker.mouth;
  });
  const face = useSelector((state) => {
    return state.sticker.face;
  });

  return (
    <div>
      {/* 
            입1
        */}

      <img
        src={Mouth1}
        className={`${styles.mouth11} 
        ${face === 1 && mouth === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth1}
        className={`${styles.mouth12} 
        ${face === 2 && mouth === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth1}
        className={`${styles.mouth13} 
        ${face === 3 && mouth === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth1}
        className={`${styles.mouth14} 
        ${face === 4 && mouth === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth1}
        className={`${styles.mouth15} 
        ${face === 5 && mouth === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth1}
        className={`${styles.mouth16} 
        ${face === 6 && mouth === 1 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입2
        */}

      <img
        src={Mouth2}
        className={`${styles.mouth21} 
        ${face === 1 && mouth === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth2}
        className={`${styles.mouth22} 
        ${face === 2 && mouth === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth2}
        className={`${styles.mouth23} 
        ${face === 3 && mouth === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth2}
        className={`${styles.mouth24} 
        ${face === 4 && mouth === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth2}
        className={`${styles.mouth25} 
        ${face === 5 && mouth === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth2}
        className={`${styles.mouth26} 
        ${face === 6 && mouth === 2 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입3
        */}

      <img
        src={Mouth3}
        className={`${styles.mouth31} 
        ${face === 1 && mouth === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth3}
        className={`${styles.mouth32} 
        ${face === 2 && mouth === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth3}
        className={`${styles.mouth33} 
        ${face === 3 && mouth === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth3}
        className={`${styles.mouth34} 
        ${face === 4 && mouth === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth3}
        className={`${styles.mousth5} 
        ${face === 5 && mouth === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth3}
        className={`${styles.mouth36} 
        ${face === 6 && mouth === 3 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입4
        */}

      <img
        src={Mouth4}
        className={`${styles.mouth41} 
        ${face === 1 && mouth === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth4}
        className={`${styles.mouth42} 
        ${face === 2 && mouth === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth4}
        className={`${styles.mouth43} 
        ${face === 3 && mouth === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth4}
        className={`${styles.mouth44} 
        ${face === 4 && mouth === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth4}
        className={`${styles.mouth45} 
        ${face === 5 && mouth === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth4}
        className={`${styles.mouth46} 
        ${face === 6 && mouth === 4 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입5
        */}

      <img
        src={Mouth5}
        className={`${styles.mouth51} 
        ${face === 1 && mouth === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth5}
        className={`${styles.mouth52} 
        ${face === 2 && mouth === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth5}
        className={`${styles.mouth53} 
        ${face === 3 && mouth === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth5}
        className={`${styles.mouth54} 
        ${face === 4 && mouth === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth5}
        className={`${styles.mouth55} 
        ${face === 5 && mouth === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth5}
        className={`${styles.mouth56} 
        ${face === 6 && mouth === 5 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입6
        */}

      <img
        src={Mouth6}
        className={`${styles.mouth61} 
        ${face === 1 && mouth === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth6}
        className={`${styles.mouth62} 
        ${face === 2 && mouth === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth6}
        className={`${styles.mouth63} 
        ${face === 3 && mouth === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth6}
        className={`${styles.mouth64} 
        ${face === 4 && mouth === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth6}
        className={`${styles.mouth65} 
        ${face === 5 && mouth === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Mouth6}
        className={`${styles.mouth66} 
        ${face === 6 && mouth === 6 ? "" : styles.hidden}`}
      ></img>
    </div>
  );
};

export default Mouth;
