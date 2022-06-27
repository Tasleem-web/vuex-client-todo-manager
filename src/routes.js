import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "./pages/Home.vue";
import ProductId from "./pages/Product.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: MyHome
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductId,
        props: true
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router;
