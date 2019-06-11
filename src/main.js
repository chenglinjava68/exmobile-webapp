import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import { Tabbar, TabbarItem } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

sync(store, router);

Vue.use(Tabbar).use(TabbarItem);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
