import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "./pages/Home.vue";
import ProductId from "./pages/Product.vue";
import ProductConfiguration from "./components/ProductConfigure.vue";
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
    },
    {
        path: '/product/configuration',
        name: 'product-configuration',
        component: ProductConfiguration,
        props: true
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router;
