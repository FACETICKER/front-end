import React from "react";
import { useSelector } from "react-redux";
import styles from "./Foot.module.css";
import Foot2 from "../image/foot_image/foot2.png";
import Foot5 from "../image/foot_image/foot5.png";
import Foot6 from "../image/foot_image/foot6.png";
import Foot11 from "../image/foot_image/foot11.png";
import Foot21 from "../image/foot_image/foot21.png";
import Foot31 from "../image/foot_image/foot31.png";
import Foot41 from "../image/foot_image/foot41.png";
import Foot51 from "../image/foot_image/foot51.png";
import Foot61 from "../image/foot_image/foot61.png";
import Foot13 from "../image/foot_image/foot13.png";
import Foot23 from "../image/foot_image/foot23.png";
import Foot33 from "../image/foot_image/foot33.png";
import Foot43 from "../image/foot_image/foot43.png";
import Foot53 from "../image/foot_image/foot53.png";
import Foot63 from "../image/foot_image/foot63.png";
import Foot14 from "../image/foot_image/foot14.png";
import Foot24 from "../image/foot_image/foot24.png";
import Foot34 from "../image/foot_image/foot34.png";
import Foot44 from "../image/foot_image/foot44.png";
import Foot54 from "../image/foot_image/foot54.png";
import Foot64 from "../image/foot_image/foot64.png";

import Foot1_white from '../image/foot_image/foot1.png';
import Foot3_white from '../image/foot_image/foot3_white.png';
import Foot4_white from '../image/foot_image/foot4.png';

const Foot = () => {
  const foot = useSelector((state) => {
    return state.sticker.foot;
  });
  const face = useSelector((state) => {
    return state.sticker.face;
  });

  return (
    <div>
      {/* 
            발1
        */}
      
      <img
        src={Foot1_white}
        className={`${styles.foot21} 
        ${face === 0 && foot === 1 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Foot11}
        className={`${styles.foot11} 
        ${face === 1 && foot === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot21}
        className={`${styles.foot21} 
        ${face === 2 && foot === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot31}
        className={`${styles.foot31} 
        ${face === 3 && foot === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot41}
        className={`${styles.foot41} 
        ${face === 4 && foot === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot51}
        className={`${styles.foot51} 
        ${face === 5 && foot === 1 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot61}
        className={`${styles.foot61} 
        ${face === 6 && foot === 1 ? "" : styles.hidden}`}
      ></img>

      {/* 
            발2
        */}

      <img
        src={Foot2}
        className={`${styles.foot22} 
        ${face === 0 && foot === 2 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Foot2}
        className={`${styles.foot12} 
        ${face === 1 && foot === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot2}
        className={`${styles.foot22} 
        ${face === 2 && foot === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot2}
        className={`${styles.foot32} 
        ${face === 3 && foot === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot2}
        className={`${styles.foot42} 
        ${face === 4 && foot === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot2}
        className={`${styles.foot52} 
        ${face === 5 && foot === 2 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot2}
        className={`${styles.foot62} 
        ${face === 6 && foot === 2 ? "" : styles.hidden}`}
      ></img>
      {/* 
            발3
        */}

      <img
        src={Foot3_white}
        className={`${styles.foot23} 
        ${face === 0 && foot === 3 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Foot13}
        className={`${styles.foot13} 
        ${face === 1 && foot === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot23}
        className={`${styles.foot23} 
        ${face === 2 && foot === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot33}
        className={`${styles.foot33} 
        ${face === 3 && foot === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot43}
        className={`${styles.foot43} 
        ${face === 4 && foot === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot53}
        className={`${styles.foot53} 
        ${face === 5 && foot === 3 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot63}
        className={`${styles.foot63} 
        ${face === 6 && foot === 3 ? "" : styles.hidden}`}
      ></img>

      {/* 
            발4
        */}

      <img
        src={Foot4_white}
        className={`${styles.foot24} 
        ${face === 0 && foot === 4 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Foot14}
        className={`${styles.foot14} 
        ${face === 1 && foot === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot24}
        className={`${styles.foot24} 
        ${face === 2 && foot === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot34}
        className={`${styles.foot34} 
        ${face === 3 && foot === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot44}
        className={`${styles.foot44} 
        ${face === 4 && foot === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot54}
        className={`${styles.foot54} 
        ${face === 5 && foot === 4 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot64}
        className={`${styles.foot64} 
        ${face === 6 && foot === 4 ? "" : styles.hidden}`}
      ></img>

      {/* 
            발5
        */}

      <img
        src={Foot5}
        className={`${styles.foot25} 
        ${face === 0 && foot === 5 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Foot5}
        className={`${styles.foot15} 
        ${face === 1 && foot === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot5}
        className={`${styles.foot25} 
        ${face === 2 && foot === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot5}
        className={`${styles.foot35} 
        ${face === 3 && foot === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot5}
        className={`${styles.foot45} 
        ${face === 4 && foot === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot5}
        className={`${styles.foot55} 
        ${face === 5 && foot === 5 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot5}
        className={`${styles.foot65} 
        ${face === 6 && foot === 5 ? "" : styles.hidden}`}
      ></img>

      {/* 
            발6
        */}

      <img
        src={Foot6}
        className={`${styles.foot26} 
        ${face === 0 && foot === 6 ? "" : styles.hidden}`}
      ></img>

      <img
        src={Foot6}
        className={`${styles.foot16} 
        ${face === 1 && foot === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot6}
        className={`${styles.foot26} 
        ${face === 2 && foot === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot6}
        className={`${styles.foot36} 
        ${face === 3 && foot === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot6}
        className={`${styles.foot46} 
        ${face === 4 && foot === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot6}
        className={`${styles.foot56} 
        ${face === 5 && foot === 6 ? "" : styles.hidden}`}
      ></img>
      <img
        src={Foot6}
        className={`${styles.foot66} 
        ${face === 6 && foot === 6 ? "" : styles.hidden}`}
      ></img>
    </div>
  );
};

export default Foot;
