<template>
    <div class="nav">
        <router-link class="link" to="/">main</router-link>
        <router-link to="users" class="link" >users</router-link>
    </div>
</template>

<script>
import router from "../router/routers"
export default {
    name:'my-navigation'
}
router.push({name:"main"})
router.push({name:'users'})
router.push({name:'likecreate'})
</script>

<style scoped>
    .nav{
        display: flex;
        justify-content: space-evenly;
    }
    .link{
        text-decoration: none;
        color: teal;

    }
</style>