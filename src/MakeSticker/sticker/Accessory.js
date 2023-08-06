import React from "react";
import { useSelector } from "react-redux";
import styles from "./Accessory.module.css";
import Accessory1 from "../image/accessory_image/accessory1.png";
import Accessory2 from "../image/accessory_image/accessory2.png";
import Accessory3 from "../image/accessory_image/accessory3.png";
import Accessory4 from "../image/accessory_image/accessory4.png";
import Accessory5 from "../image/accessory_image/accessory5.png";
import Accessory6 from "../image/accessory_image/accessory6.png";

const Accessory = () => {
  const accessory = useSelector((state) => {
    return state.sticker.accessory;
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
        src={Accessory1}
        className={`${styles.accessory12} 
        ${face === 0 && accessory === 1 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Accessory1}
        className={`${styles.accessory11} 
        ${face === 1 && accessory === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory1}
        className={`${styles.accessory12} 
        ${face === 2 && accessory === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory1}
        className={`${styles.accessory13} 
        ${face === 3 && accessory === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory1}
        className={`${styles.accessory14} 
        ${face === 4 && accessory === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory1}
        className={`${styles.accessory15} 
        ${face === 5 && accessory === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory1}
        className={`${styles.accessory16} 
        ${face === 6 && accessory === 1 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입2
        */}

      <img
        src={Accessory2}
        className={`${styles.accessory22} 
        ${face === 0 && accessory === 2 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Accessory2}
        className={`${styles.accessory21} 
        ${face === 1 && accessory === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory2}
        className={`${styles.accessory22} 
        ${face === 2 && accessory === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory2}
        className={`${styles.accessory23} 
        ${face === 3 && accessory === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory2}
        className={`${styles.accessory24} 
        ${face === 4 && accessory === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory2}
        className={`${styles.accessory25} 
        ${face === 5 && accessory === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory2}
        className={`${styles.accessory26} 
        ${face === 6 && accessory === 2 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입3
        */}

      <img
        src={Accessory3}
        className={`${styles.accessory32} 
        ${face === 0 && accessory === 3 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Accessory3}
        className={`${styles.accessory31} 
        ${face === 1 && accessory === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory3}
        className={`${styles.accessory32} 
        ${face === 2 && accessory === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory3}
        className={`${styles.accessory33} 
        ${face === 3 && accessory === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory3}
        className={`${styles.accessory34} 
        ${face === 4 && accessory === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory3}
        className={`${styles.accessory35} 
        ${face === 5 && accessory === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory3}
        className={`${styles.accessory36} 
        ${face === 6 && accessory === 3 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입4
        */}

      <img
        src={Accessory4}
        className={`${styles.accessory42} 
        ${face === 0 && accessory === 4 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Accessory4}
        className={`${styles.accessory41} 
        ${face === 1 && accessory === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory4}
        className={`${styles.accessory42} 
        ${face === 2 && accessory === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory4}
        className={`${styles.accessory43} 
        ${face === 3 && accessory === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory4}
        className={`${styles.accessory44} 
        ${face === 4 && accessory === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory4}
        className={`${styles.accessory45} 
        ${face === 5 && accessory === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory4}
        className={`${styles.accessory46} 
        ${face === 6 && accessory === 4 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입5
        */}

      <img
        src={Accessory5}
        className={`${styles.accessory52} 
        ${face === 0 && accessory === 5 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Accessory5}
        className={`${styles.accessory51} 
        ${face === 1 && accessory === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory5}
        className={`${styles.accessory52} 
        ${face === 2 && accessory === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory5}
        className={`${styles.accessory53} 
        ${face === 3 && accessory === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory5}
        className={`${styles.accessory54} 
        ${face === 4 && accessory === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory5}
        className={`${styles.accessory55} 
        ${face === 5 && accessory === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory5}
        className={`${styles.accessory56} 
        ${face === 6 && accessory === 5 ? "" : styles.hidden}`}
      ></img>

      {/* 
            입6
        */}

      <img
        src={Accessory6}
        className={`${styles.accessory62} 
        ${face === 0 && accessory === 6 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Accessory6}
        className={`${styles.accessory61} 
        ${face === 1 && accessory === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory6}
        className={`${styles.accessory62} 
        ${face === 2 && accessory === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory6}
        className={`${styles.accessory63} 
        ${face === 3 && accessory === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory6}
        className={`${styles.accessory64} 
        ${face === 4 && accessory === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory6}
        className={`${styles.accessory65} 
        ${face === 5 && accessory === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Accessory6}
        className={`${styles.accessory66} 
        ${face === 6 && accessory === 6 ? "" : styles.hidden}`}
      ></img>
    </div>
  );
};

export default Accessory;
