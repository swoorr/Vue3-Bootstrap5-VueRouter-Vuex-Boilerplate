import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

/** bootstrap */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

/**router */
import router from "./router";
app.use(router);

/**vuex */
import vuex from "./store";
app.use(vuex);

/** mixins */
import global from "./mixins/global";
app.mixin(global);

/**app mounted */
app.mount("#app");
