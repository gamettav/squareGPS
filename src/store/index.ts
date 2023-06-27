import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import localStoragePlugin from "./plugins";

const store = createStore({
  state,
  actions,
  mutations,
  getters,
  plugins: [localStoragePlugin],
});

export default store;
