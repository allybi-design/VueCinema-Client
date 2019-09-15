import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import tooltip from "./utils/tooltip";
Vue.use(tooltip);

import responsive from "vue-responsive";
Vue.use(responsive);

import "./assets/styles/styles.scss";

import moment from "moment-timezone";
moment.tz.setDefault("UTC");

Vue.prototype.$moment = moment;
// Object.defineProperty(Vue.prototype, '$moment', {
//  get() {return this.$root.moment}
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
