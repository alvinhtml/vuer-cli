import { PageInfo, PageList } from "/@src/models/requestCommon";

import { LoginForm } from "/@src/models/managerRequestBody";

import { login, getTodos } from "/@src/api/manager";

// initial state
const state = () => ({
  logined: false,
  todos: {
    list: [],
    page: 1,
    size: 10,
    total: 0,
  },
});

// getters
const getters = {
  getCompleteTodos: (state: any) => {
    return state.todos.list.map((v) => v.state === "complete") || [];
  },
};

// actions
const actions = {
  async login({ commit }: any, payload: LoginForm): Promise<any> {
    const data = await login(payload);

    if (data.token) {
      window.localStorage.setItem("token", data.token);
    }

    if (data.user_name) {
      commit("logined", true);
    }
    return data;
  },
  async getTodos({ commit }: any, payload: PageInfo): Promise<PageList> {
    const data = await getTodos(payload);
    commit("todos", data);
    return data;
  },
};

// mutations
const mutations = {
  logined(state: any, payload: any) {
    state.logined = payload;
  },
  todos(state: any, payload: any) {
    state.todos = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
