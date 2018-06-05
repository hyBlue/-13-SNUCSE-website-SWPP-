import axios from 'axios';

export const FETCH_NOTICES = 'fetch_notices';
export const FETCH_NOTICE = 'fetch_notice';
export const CREATE_NOTICE = 'create_notice';
export const DELETE_NOTICE = 'delete_notice';
export const FETCH_NEWSES = 'fetch_newses';
export const FETCH_NEWS = 'fetch_new';
export const FETCH_PROFESSORS = 'fetch_professors';
export const FETCH_STAFFS = 'fetch_staffs';
export const FETCH_TAGS = 'fetch_tags';
export const CREATE_LOGIN = 'create_login';
const ROOT_URL = 'http://127.0.0.1:8000/api';
const API_KEY = '?key=TEMPORARY1234';

export const TagTest = 'test_fetch';


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

export function fetchNewses() {
    const request = axios.get(`${ROOT_URL}/news${API_KEY}`)
    return {
        type: FETCH_NEWSES,
        payload: request
    };
}

export function fetchNews(id) {
    const request = axios.get(`${ROOT_URL}/news/${id}${API_KEY}`)
    return {
        type: FETCH_NEWS,
        payload: request
    };
}

export function fetchProfessors() {
    const request = axios.get(`${ROOT_URL}/professor${API_KEY}`);
    return {
        type: FETCH_PROFESSORS,
        payload: request
    }
}

export function fetchStaffs() {
    const request = axios.get(`${ROOT_URL}/staff${API_KEY}`);
    return {
        type: FETCH_STAFFS,
        payload: request
    }
}

export function fetchTags() {
    const request = axios.get(`${ROOT_URL}/tags${API_KEY}`)
    return {
        type: FETCH_TAGS,
        payload: request
    }
}

export function createNotice(values, callback) {
    //파일, 이미지 여러개 처리 필요.
    var formData = new FormData();
    Object.keys(values).map(key => {
        console.log(values[key]);
        formData.append(key, values[key]);
    })
    console.log(formData);
    const request = axios.post(`${ROOT_URL}/notice/${API_KEY}`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    ).then(() => callback());

    return {
        type: CREATE_NOTICE,
        payload: request
    }
}

export function createLogin(values, callback) {
    const request = axios.post(`${ROOT_URL}/sign_in${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_LOGIN,
        payload: request
    }
}

export function deleteNotice(id, callback) {
    const request = axios.delete(`${ROOT_URL}/notice/${id}${API_KEY}`)
        .then(() => callback());
    return {
        type: DELETE_NOTICE,
        payload: id
    }
}