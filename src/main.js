import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import * as GMapVue from 'gmap-vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(GMapVue, {
  load: {
    key: process.env.VUE_APP_GMAP,
    libraries: 'places',
  }
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
