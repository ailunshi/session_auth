import axios from 'axios';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from './types';
import Cookies from 'js-cookie';

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        },
        withCredentials: true,
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/accounts/login`, body, config);

        if (res.data.success) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.username
            });

            // load the user
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOGOUT_FAIL
        });
    }
};

export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        },
        withCredentials: true,
    };

    const body = JSON.stringify({ username, password, re_password});

    console.log('CSRF Token: ', Cookies.get('csrftoken'));
    console.log(' something please ');
    console.log('env var: ', import.meta.env.VITE_API_URL);

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/accounts/register`, body, config);
    
        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL,
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS,
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        },
        withCredentials: true,
    };

    const body = JSON.stringify({
        'withCredentials': true,
    });

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/accounts/logout`, body, config);

        if (res.data.success) {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOGOUT_FAIL
        });

    }
};