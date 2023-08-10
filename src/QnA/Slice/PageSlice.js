import {createSlice} from '@reduxjs/toolkit';

const PageSlice = createSlice({
    name: 'page',
    initialState: 'host',
    reducers: {
        host: (state, action) => {
            return 'host';
        },
        guest: (state, action) => {
            return 'guest';
        },
        basic: (state, action) => {
            return 'basic';
        },
        del: (state, action) => {
            return 'del';
        },
    }
});
export default PageSlice;