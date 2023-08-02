import React, { useState } from 'react';
import styles from './style/origin.module.css';
import styles2 from './style/QnApage_2.module.css';
import styles3 from './style/Basic_Choice.module.css';
import styles4 from './style/QnApage.module.css';
import Arrow_left from '../img/QnA_img/arrow-left.png'

const Nickname = (props) => {
    
    const [name, setname] = useState("questicker");

    return (
        <div className={`${props.page === 'host' && styles2.draw} ${props.page === 'guest' && styles4.draw} ${props.page === 'basic' && styles3.draw}` }>
            <img src={Arrow_left} className={styles2.Arrow_left} alt='Logo'></img>
            <h1 className={styles.name}>{name}</h1>
        </div>
    );
};

export default Nickname;