 
 import Main from "../../pages/Main.vue"
 import PostPage from "../../pages/PostPage.vue"
 import Likes from "../../pages/Likes.vue"
 import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
    path:"/",
    component:Main,
    name:"main"
    },
    { 
    path:"/users",
    component:PostPage,
    name:'users'
    },
    {
        path:"/likecreate",
        component:Likes,
        name:"likecreate"
    }
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;
