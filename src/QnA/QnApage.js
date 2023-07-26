import React, { useState } from 'react';
import QnApage_host from './QnApage_host';
import QnApage_guest from './QnApage_guest';
import styles from './style/origin.module.css';
import {useDispatch, useSelector} from "react-redux";
import FirstSlice from './Slice/FirstSlice';
import PageSlice from './Slice/PageSlice';
import Basic_Choice from './Basic_Choice';

const QnApage = () => {

    const dispatch = useDispatch();

    const page = useSelector(state=>{
        return state.page;
    });

    const click = () => {
        {page === 'host' ? dispatch(PageSlice.actions.guest()) : dispatch(PageSlice.actions.host())}
        dispatch(FirstSlice.actions.change());
    };

    return (
        <div className={styles.dream}>
            <button onClick={click}>flip</button>
            {page === 'host' && (<QnApage_host />)}
            {page === 'guest' && (<QnApage_guest />)}
            {page === 'basic' && (<Basic_Choice />)}
        </div>
    );
};

export default QnApage;
