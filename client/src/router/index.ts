import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Inventory from '../views/Inventory.vue'
import Reservations from '../views/Reservations.vue'
import Tables from '../views/Tables.vue'


const routes:any[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory,
    },
    {
        path: '/reservations',
        name: 'Reservations',
        component: Reservations
    },
    {
        path: '/tables',
        name: 'Tables',
        component: Tables
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router