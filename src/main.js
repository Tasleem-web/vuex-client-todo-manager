import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import routes from "./routes";

createApp(App).use(routes).use(store).mount('#app')

import "bootstrap/dist/js/bootstrap.js";