import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../components/APP1.vue"),
        },
        {
            path: "/DatePicker",
            component: () => import("../components/DatePicker.vue"),
        },
        {
            path: "/Button",
            component: () => import("../components/Button.vue"),
        }
    ]

})
export default router