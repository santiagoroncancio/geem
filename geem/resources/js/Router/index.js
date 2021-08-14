import VueRouter from "vue-router";
import routes from './route';

const router = new VueRouter({
    mode: "history",
    routes,
    linkExactActiveClass: "active",
});

export default router;