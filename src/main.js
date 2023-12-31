// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import List from "./components/List.vue";
Vue.config.productionTip = false;

export const bus = new Vue();

// Vue.filter("uppercase", function(value) {
//   return value.toUpperCase();
// });
Vue.filter("truncate", function(value) {
  return `${value.slice(0, 10)}...`;
});
// Vue.component("List", List);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
