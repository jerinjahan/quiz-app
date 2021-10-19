import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MCQ from '../views/MCQ.vue'
// import Result from '../views/Result.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/mcq',
        name: 'MCQ',
        component: MCQ
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
