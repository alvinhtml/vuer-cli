import { getProfile } from "/@src/api/user";

// initial state
const state = () => ({
  profile: {},
});

// getters
const getters = {};

// actions
const actions = {
  async getProfile({ commit }: any): Promise<any> {
    const data = await getProfile();

    return data;
  },
};

// mutations
const mutations = {
  profile(state: any, payload: any) {
    state.profile = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
