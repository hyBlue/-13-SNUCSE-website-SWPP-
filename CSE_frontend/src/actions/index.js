import axios from 'axios';

export const FETCH_NOTICES = 'fetch_notices';
export const FETCH_NOTICE = 'fetch_notice';
export const CREATE_NOTICE = 'create_notice';
export const FETCH_NEWS = 'fetch_News';
export const FETCH_NEW = 'fetch_New';
export const CREATE_LOGIN = 'create_login';
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

export function fetchNews() {
  const request = axios.get(`${ROOT_URL}/News${API_KEY}`)
  return {
    type: FETCH_NEWS,
    payload: request
  };
}

export function fetchNew(id) {
  const request = axios.get(`${ROOT_URL}/New/${id}${API_KEY}`)
  return {
    type: FETCH_NEW,
    payload: request
  };
}

export function createLogin(values, callback) {
  const request = axios.post(`${ROOT_URL}/sign_in${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_LOGIN,
    payload: request
  }
}
