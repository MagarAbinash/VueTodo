import { createRouter, createWebHistory } from "vue-router";
import Home from '../routerapp/components/Home.vue'
import About from '../routerapp/components/About.vue'
import Jobs from '../routerapp/components/jobs/Jobs.vue'
import JobDetails from '../routerapp/components/jobs/JobDetails.vue'
import NotFound from '../routerapp/components/jobs/NotFound.vue'


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
        path: '/jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true
    },
    // Redirect
    {
        path: '/all-jobs',
        redirect: '/jobs'
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