import Vue from 'vue';
import App from './App';
import HeyUI from 'heyui';


import './css/index.less';

import 'js/codemirror.js';

Vue.use(HeyUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
