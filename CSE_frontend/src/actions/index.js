import axios from 'axios';

export const FETCH_MAINNOTICES = 'fetch_main_notices';
export const FETCH_MAINNEWS = 'fetch_main_news';
export const FETCH_NOTICES = 'fetch_notices';
export const FETCH_NOTICE = 'fetch_notice';
export const FETCH_NEWSES = 'fetch_newses';
export const FETCH_NEWS = 'fetch_new';
export const FETCH_PROFESSORS = 'fetch_professors';
export const FETCH_STAFFS = 'fetch_staffs';
export const FETCH_HONOURPROFS = 'fetch_honourProfs';
export const FETCH_TAGS = 'fetch_tags';
export const FETCH_RESERVATION = 'fetch_reservation';
export const FETCH_UNDERCOURSES = 'fetch_undercourses';
export const FETCH_UNDERCOURSE = 'fetch_undercourse';
export const FETCH_RESEARCHLABS = 'fetch_researchlabs';
export const FETCH_RESEARCHLAB = 'fetch_researchlab';
export const CREATE_NOTICE = 'create_notice';
export const CREATE_RESERVATION = 'create_reservation';
export const CREATE_LOGIN = 'create_login';

export const DELETE_NOTICE = 'delete_notice';
export const DELETE_RESERVATION = 'delete_reservation';
const ROOT_URL = 'http://127.0.0.1:8000/api';
// const ROOT_URL = 'http://52.79.206.30:8000/api';
const API_KEY = '?key=TEMPORARY1234';

export function fetchMainNotices(itemNumber) {
    const request = axios.get(`${ROOT_URL}/notice${API_KEY}`, {
        params: {
            page : 1,
            page_size : itemNumber
        }
    })
    return {
        type: FETCH_MAINNOTICES,
        payload: request
    }
}
export function fetchMainNews(itemNumber) {
    const request = axios.get(`${ROOT_URL}/news${API_KEY}`, {
        params: {
            page : 1,
            page_size : itemNumber
        }
    })
    return {
        type: FETCH_MAINNEWS,
        payload: request
    }
}
export function fetchNotices() {
    const request = axios.get(`${ROOT_URL}/notice${API_KEY}`);
    return {
        type: FETCH_NOTICES,
        payload: request
    };
}
export function fetchNoticeByPage(pageNumber, pageSize) {
    const request = axios.get(`${ROOT_URL}/notice${API_KEY}`, {
        params: {
            page : pageNumber,
            page_size : pageSize
        }
    })
    return {
        type: FETCH_MAINNOTICES,
        payload: request
    }
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

export function fetchHonourProfs() {
    const request = axios.get(`${ROOT_URL}/emeritus${API_KEY}`);
    return {
        type: FETCH_HONOURPROFS,
        payload: request
    }
}

export function fetchTags() {
    const request = axios.get(`${ROOT_URL}/tags/${API_KEY}`)
    return {
        type: FETCH_TAGS,
        payload: request
    }
}

export function fetchReservation(subCategory, RoomKey) {
    const request = axios.get(`${ROOT_URL}/reservation/${API_KEY}`, {
        params: {
            category: subCategory,
            roomkey: RoomKey
        }
    });
    return {
        type: FETCH_RESERVATION,
        payload: request,
        // subCategory: subCategory,
        // RoomKey: RoomKey
    }
}

export function createNotice(values, callback) {
    console.log(values);
    var formData = new FormData();
    Object.keys(values).map(key => {
        if (key === 'attached') {
            let i = 0;
            _.map(values[key], value => {
                console.log(value);
                formData.append(`attached${i++}`, value);
            })
        } else {
            formData.append(key, values[key]);
        }
    })
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

export function createReservation(interval) {
    //intervals: 여러 요일을 겹쳐 예약하지 않는 이상 길이 1의 배열
    //Map intervals to Transform interval.start,end from moment type to date type
    let newValue = {};
    _.mapKeys(interval, (value, key) => {
        if (key === 'start' || key === 'end') {
            newValue[key] = value.toISOString();
        } else {
            newValue[key] = value;
        }
    });
    console.log(newValue);
    const request = axios.post(`${ROOT_URL}/reservation/${API_KEY}`, newValue)
    return {
        type: CREATE_RESERVATION,
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

export function deleteReservation(event) {
    console.log(event);
    console.log(event.id);
    const request = axios.delete(`${ROOT_URL}/reservation/${event.id}${API_KEY}`);
    return {
        type: DELETE_RESERVATION,
        payload: event
    }
}
