import axios from 'axios';

export const FETCH_NOTICES = 'fetch_notices';
export const FETCH_NOTICE = 'fetch_notice';
export const CREATE_NOTICE = 'create_notice';
export const DELETE_NOTICE = 'delete_notice';
const ROOT_URL = 'http://127.0.0.1:8000/api';
const API_KEY = '?key=TEMPORARY1234';


export function fetchNotices() {
    const request = axios.get(`${ROOT_URL}/notice${API_KEY}`)
    return {
        type: FETCH_NOTICES,
        payload: request
    };
}

export function fetchNotice(id) {
    const request = axios.get(`${ROOT_URL}/notice/${id}${API_KEY}`)
    return {
        type: FETCH_NOTICE,
        payload: request
    }
}

export function createNotice(values, callback) {
    const request = axios.post(`${ROOT_URL}/notice${API_KEY}`, values)
        .then(() => callback());
    
    return {
        type: CREATE_NOTICE,
        payload: request 
    }
}

export function deleteNotice(id) {
    const request = axios.delete(`${ROOT_URL}/notice/${id}${API_KEY}`)
        .then(() => callback());
    return {
        type: DELETE_NOTICE,
        payload: id
    }
}