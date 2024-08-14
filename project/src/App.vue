<template>
    <div class="posts">
        <posts-form @create="createPost" v-bind:posts="posts" />
        <posts-list v-bind:posts="posts" />
    </div>
</template>

<script>

import PostsForm from './components/PostsForm.vue';
import PostsList from './components/PostsList.vue';

export default {
    components:{
        PostsForm, PostsList
    }
    ,
    data(){
        return{
            posts: [{id:1,title:"JS",body:"JavaScript sosi"},
            {id:2,title:"JS 1",body:"JavaScript sosi 1"},
            {id:3,title:"JS 2",body:"JavaScript sosi 2"},
            {id:4,title:"JS 3",body:"JavaScript sosi 3"},
            {id:5,title:"JS 3",body:"JavaScript sosi 4"},
            ],
            title:"",
            body:"",
        }
    },
    methods:{
        createPost(post){
            this.posts.push(post)
        },
        inputTitle(e){
            this.title = e.target.value
        },
        inputBody(e){
            this.body = e.target.value
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .posts{
        padding: 20px;
    }

</style>