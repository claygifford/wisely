import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
//app.use(VueScreen, 'tailwind');
app.mount('#app');