import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("./pages/Home.vue")
    },
    // {
    //     path: '/product/:id',
    //     name: 'product',
    //     component: () => import('./pages/Product.vue'),
    //     props: true
    // },
    // {
    //     path: '/product/configuration',
    //     name: 'product-configuration',
    //     props: true,
    //     component: () => import("./components/ProductConfigure.vue"),
    // },
    // {
    //     path: '/sign-in',
    //     name: 'Sign In',
    //     params: true,
    //     component: () => import("./pages/Login.vue"),
    // },
    // {
    //     path: '/sign-up',
    //     name: 'Sign Up',
    //     params: true,
    //     component: () => import("./pages/Registration.vue"),
    // }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router;
