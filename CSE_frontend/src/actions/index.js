import axios from 'axios';

export const FETCH_NOTICES = 'fetch_notices';
export const FETCH_NOTICE = 'fetch_notice';
export const CREATE_NOTICE = 'create_notice';
export const DELETE_NOTICE = 'delete_notice';
export const FETCH_NEWSES = 'fetch_newses';
export const FETCH_NEWS = 'fetch_new';
export const FETCH_PROFESSORS = 'fetch_professors';
export const FETCH_UNDERCOURSES = 'fetch_undercourses';
export const FETCH_UNDERCOURSE = 'fetch_undercourse';
export const FETCH_RESEARCHLABS = 'fetch_researchlabs';
export const FETCH_RESEARCHLAB = 'fetch_researchlab';
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
    const request = axios.get(`${ROOT_URL}/professor${API_KEY}`)
    return {
        type: FETCH_PROFESSORS,
        payload: request
    }
}

export function fetchUndercourses() {
    const request = axios.get(`${ROOT_URL}/undercourse${API_KEY}`)
    return {
        type: FETCH_UNDERCOURSES,
        payload: request
    }
}

export function fetchResearchlabs() {
    const request = axios.get(`${ROOT_URL}/lab${API_KEY}`)
    return {
        type: FETCH_RESEARCHLABS,
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

//TEST for getting notices by tag
export function fetchTagNotices(tagId) {
    return new Promise((resolve, reject) => {
        const request = axios.get(`${ROOT_URL}/tags/13${API_KEY}`)
        let notice_ids;
        const promise = request.then(value => {
            notice_ids = value.data.notices;
            console.log(notice_ids);
            let request_notices = [];
            _.map(notice_ids, id => {
                request_notices.push(axios.get(`${ROOT_URL}/notice/${id}${API_KEY}`))
                fetchNotice(id);
            })
            resolve({ type: TagTest, payload: request_notices});
        });
    })
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
