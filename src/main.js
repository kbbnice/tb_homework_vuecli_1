import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/index.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mock from "mockjs"


Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$mock = Mock

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
