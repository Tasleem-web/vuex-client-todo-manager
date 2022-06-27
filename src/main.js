import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(routes).use(store).mount('#app')
