import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Token() {
    const userID = useSelector(state=>{
        return state.login.userId;
    });
    const JWT = useSelector(state=>{
        return state.login.token;
    });
    const hostID = useSelector(state=>{
        return state.login.hostid;
    });
    return [userID, JWT, hostID];
}

export default Token;



