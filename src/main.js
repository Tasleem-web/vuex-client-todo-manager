import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import store from './store'
import routes from "./routes";

import 'ant-design-vue/dist/antd.css';

createApp(App).use(Antd).use(routes).use(store).mount('#app')
