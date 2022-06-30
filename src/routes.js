import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "./pages/Home.vue";
import ProductPage from "./pages/product/Product.vue";
import UploadProduct from "./pages/product/UploadProduct.vue";
import LoginPage from "./pages/Login.vue";
import CartPage from "./pages/Cart.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MyHome
    },
    {
        path: '/product',
        name: 'product',
        component: ProductPage,
        props: true
    },
    {
        path: '/product/upload',
        name: 'productUpload',
        component: UploadProduct,
        props: true
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartPage,
        props: true
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router;
