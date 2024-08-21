<template>
    <div class="nav">
        <router-link class="link" to="/">main</router-link>
        <router-link to="users" class="link" >users</router-link>
        <router-link class="link" to="likes">likes</router-link>
        <router-link to="likecreate" class="link" >createlike</router-link>
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
router.push({name:"likes"})

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