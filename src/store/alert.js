const state = {
  type: null,
  message: null,
};

const actions = {
  success({ commit }, message) {
    commit('success', message);
  },
  error({ commit }, message) {
    commit('error', message);
  },
  clear({ commit }) {
    commit('clear');
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  success(state, message) {
    state.type = 'alert-success';
    state.message = message;
  },
  // eslint-disable-next-line no-shadow
  error(state, message) {
    state.type = 'alert-danger';
    state.message = message;
  },
  // eslint-disable-next-line no-shadow
  clear(state) {
    state.type = null;
    state.message = null;
  },
};

// eslint-disable-next-line import/prefer-default-export
export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};
