import Vue from 'vue';
import App from './App.vue';

import ComponentLibrary from 'ui-library-starter';

import 'ui-library-starter/dist/ui-library-starter.css';

Vue.use(ComponentLibrary);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
