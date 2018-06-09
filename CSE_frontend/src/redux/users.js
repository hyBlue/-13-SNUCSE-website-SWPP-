const initialState = {
  isLoggedIn: localStorage.getItem('JWT') ? true : false,
  token: localStorage.getItem('JWT'),
};

const SAVE_TOKEN = 'SAVE_TOKEN';
const AUTH_FAILURE = 'AUTH_FAILURE';
const USER_LOGOUT = 'USER_LOGOUT';
const SET_PROFILE = 'SET_PROFILE';

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token,
  };
}

function authFailure() {
  return {
    type: AUTH_FAILURE,
  };
}

function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}

function setProfile(profile) {
  return {
    type: SET_PROFILE,
    profile
  };
}

function usernameLogin(username, password) {
  return dispatch => {
    fetch('/rest-auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(response => {
      if (response.status === 400) {
        dispatch(authFailure());
      }
      return response.json();
    })
    .then(json => {
      if (json.token) {
        dispatch(saveToken(json.token));
      }
    })
    .catch(err => console.log(err));
  };
}

function createAccount(username, password, email) {
  return dispatch => {
    fetch('rest-auth/registration/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email: email,
      }),
    })
    .then(response => {
      if (response.status === 400) {
        dispatch(authFailure());
      }
      return response.json();
    })
    .then(json => {
      if (json.token) {
        dispatch(saveToken(json.token));
      }
    })
    .catch(err => console.log(err));
  };
}

function Logout() {
  return dispatch => {
    fetch('/rest-auth/logout/', {
      method: 'POST',
    })
    .then(response => {
      if (response.statue === 200) {
        localStorage.removeItem('JWT');
        dispatch(userLogout());
      }
    })
    .catch(err => console.log(err));
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case AUTH_FAILURE:
      return applyAuthFailure(state, action);
    case USER_LOGOUT:
      return applyUserLogout(state, action);
    case SET_PROFILE:
      return applySetProfile(state, action);
    default:
      return state;
  }
}

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem('JWT', token);
  return {
    ...state,
    isLoggedIn: true,
    token: token,
  };
}

function applyAuthFailure(state, action) {
  return {
    ...state,
    authErr: true,
  };
}

function applyUserLogout(state, action) {
  return {
    ...state,
    isLoggedIn: false,
  };
}

const actionCreators = {
  usernameLogin,
  createAccount,
  Logout,
};

export { actionCreators };

export default reducer;
    
