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
    //파일, 이미지 여러개 처리 필요.
    var formData = new FormData();
    values.foreach(data=> {
        formData.append(data.key, data);
    })
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

export function deleteNotice(id) {
    const request = axios.delete(`${ROOT_URL}/notice/${id}${API_KEY}`)
        .then(() => callback());
    return {
        type: DELETE_NOTICE,
        payload: id
    }
}