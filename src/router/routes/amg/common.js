export default [
    {
        path: "/menu",
        name: "amg-menu",
        component: () => import("@/views/main/Menu.vue"),
        meta: {
            layout: "horizontal"
        }
    }
]
