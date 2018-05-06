import axios from 'axios';

export const FETCH_NOTICES = 'fetch_notices';
const ROOT_URL = 'http://127.0.0.1:8000/api';
const API_KEY = '?key=TEMPORARY1234';


export function fetchNotices() {
    const request = axios.get(`${ROOT_URL}/notice${API_KEY}`)
    return {
        type: FETCH_NOTICES,
        payload: request
    };
}
