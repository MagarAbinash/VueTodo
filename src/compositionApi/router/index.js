import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/views/NotFound.vue'
import Details from '../components/views/Details.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/posts/:id',
        name: 'Details',
        component: Details,
        props: true
    },
    // 404 not found
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router