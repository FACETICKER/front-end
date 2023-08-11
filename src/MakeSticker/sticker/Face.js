import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Face.module.css';
import Face1 from '../image/face_image/purple_face.png';
import Face2 from '../image/face_image/orange_face.png';
import Face3 from '../image/face_image/whiteblue_face.png';
import Face4 from '../image/face_image/green_face.png';
import Face5 from '../image/face_image/red_face.png';
import Face6 from '../image/face_image/blue_face.png';

const Face = () => {

    const face = useSelector(state=>{
        return state.sticker.face;
    });

    return (
        <div className={styles.background}>
            <img src={Face1} className={`${styles.face1} ${face === 1 ? '' : styles.hidden}`}></img>
            <img src={Face2} className={`${styles.face2} ${face === 2 ? '' : styles.hidden}`}></img>
            <img src={Face3} className={`${styles.face3} ${face === 3 ? '' : styles.hidden}`}></img>
            <img src={Face4} className={`${styles.face4} ${face === 4 ? '' : styles.hidden}`}></img>
            <img src={Face5} className={`${styles.face5} ${face === 5 ? '' : styles.hidden}`}></img>
            <img src={Face6} className={`${styles.face6} ${face === 6 ? '' : styles.hidden}`}></img>
        </div>
    );
};

export default Face;