import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/float',
        name: 'float',
        component: () => import('../components/float.vue')
    },
    {
        path: '/flex',
        name: 'flex',
        component: () => import('../components/flex.vue')
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})