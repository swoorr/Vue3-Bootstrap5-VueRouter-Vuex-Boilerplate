import { createRouter, createWebHistory } from "vue-router";

const routes = [
    /** another route */
    {
        path: "/test-page",
        name: "test-page",
        component: () => import("../pages/test-page/index.vue"),
        meta: {
            title: "test-page"
        }
    },
    /** another route */
    {
        path: "/dynamic-page/:id",
        name: "dynamic-page",
        component: () => import("../pages/dynamic-page/index.vue"),
        meta: {
            title: "dynamic-page"
        }
    },
    /** homepage */
    {
        path: "/",
        name: "home-page",
        component: () => import("../pages/home/index.vue"),
        meta: {
            title: "home page"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to, _, next) => {});

export default router;
