import { createStore, createLogger } from "vuex";
import channel from "./modules/manager";
import user from "./modules/user";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    channel,
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
