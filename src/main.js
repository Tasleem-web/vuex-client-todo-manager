import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVueIcons } from 'bootstrap'
// import 'bootstrap-vue/dist/bootstrap-icons.min.css
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/assets/css/style.css'

import "bootstrap";
import store from './store'
import routes from "./routes";

createApp(App)
    .use(BootstrapVueIcons)
    .use(routes)
    .use(store)
    .mount('#app');

// https://getbootstrap.com/docs/5.0/components/alerts/