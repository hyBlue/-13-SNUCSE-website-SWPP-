import axios from 'axios';
//커밋 테스트
export const FETCH_NOTICES = 'fetch_notices';
export const FETCH_NOTICE = 'fetch_notice';
export const CREATE_NOTICE = 'create_notice';
export const DELETE_NOTICE = 'delete_notice';
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
    //파일, 이미지 여러개 처리 필요.
    var formData = new FormData();
    _.map(values, data => {
        formData.append(data.key, data);
    })
    //   values.foreach(data=> {

    //   })
    const request = axios.post(`${ROOT_URL}/notice${API_KEY}`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )
        .then(() => callback());
    console.log(values.attached)

    return {
        type: CREATE_NOTICE,
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
