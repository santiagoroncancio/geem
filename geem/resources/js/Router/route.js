const routes = [
    {
        path: "",
        component: () => import('../Pages/Home.vue'),
        name: "home"
    },
    {
        path: "/login",
        component: () => import('../Pages/Login.vue'),
        name: "login"
    },
    {
        path: "/dashboard",
        component: () => import('../Pages/Dashboard.vue'),
        name: "dashboard"
    },
    {
        path: "/user",
        component: () => import('../Pages/User.vue'),
        name: "user"
    }
];

export default routes;