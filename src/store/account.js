import { userService } from '../service/user-service';
import { router } from '../router';

const user = JSON.parse(localStorage.getItem('user'));
const state = user ? { status: { loggedIn: true }, user } : { status: {}, user: null };

const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });
    userService.login(username, password).then(
      (user) => {
        commit('loginSuccess', user);
        router.push('/');
      },
      (error) => {
        commit('loginFailure', error);
        dispatch('alert/error', error, { root: true });
      },
    );
  },
  logout({ commit }) {
    userService.logout();
    commit('logout');
  },
  register({ dispatch, commit }, user) {
    commit('registerRequest', user);
    userService.register(user).then(
      (user) => {
        commit('registerSuccess', user);
        router.push('/login');
        setTimeout(() => {
          dispatch('alert/success', 'Registration Successful', { root: true });
        });
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error, { root: true });
      },
    );
  },
};

const mutations = {
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerSuccess(state, user) {
    state.status = {};
  },
  registerRequest(state, user) {
    state.status = { registering: true };
  },
  registerFailure(state, error) {
    state.status = {};
  },
};

// eslint-disable-next-line import/prefer-default-export
export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};
