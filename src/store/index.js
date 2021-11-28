import { createStore } from "vuex";

const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        downcrease(state) {
            state.count--;
        }
    },
    /**is it necessary * */
    actions: {
        increment() {
            this.commit("increment");
        }
    }
});

export default store;
