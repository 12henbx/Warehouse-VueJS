const API_URL = 'http://localhost:8080/';

function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}

function logout() {
  localStorage.removeItem('user');
}

function response(res) {
  // eslint-disable-next-line consistent-return
  return res.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      if (res.status === 401) {
        // logout
        logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }
  });
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${API_URL}/users/auth`, requestOptions).then(response).then((user) => {
    // check if there is jwt token
    if (user.token) {
      // store the user detail
      localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
  });
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/users/register`, requestOptions).then(response);
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${API_URL}/users`, requestOptions).then(response);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(`${API_URL}/users/${id}`, requestOptions).then(response);
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/users/${user.id}`, requestOptions).then(response);
}

// eslint-disable-next-line no-underscore-dangle
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };
  return fetch(`${API_URL}/users/${id}`, requestOptions).then(response);
}

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};
