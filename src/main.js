import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import { NotificationStore } from './components/NotificationPlugin/index';

import BlackDashboard from "./plugins/blackDashboard";

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
let vue = new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

Vue.config.errorHandler = function (err, vm, info) {
    console.error(err);
    vue.$notify({
        type: "danger",
        message: "Błąd strony: " + err.message
    });
}