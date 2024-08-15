<template>
    <div class="posts">
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Search..." />
        <div class="app__btns">
            <my-button @click="showDialog">
                Создать пользователя
            </my-button>
            <my-select v-model="selectedSort"  :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible" >
            <posts-form @create="createPost" v-bind:posts="posts" />
        </my-dialog>
        <posts-list @remove="removePost" v-bind:posts="sortedAndSearchedPosts" />
    </div>
</template>

<script>

import axios from 'axios';
import PostsForm from './components/PostsForm.vue';
import PostsList from './components/PostsList.vue';


export default {
    components:{
        PostsForm, PostsList,
    }
    ,
    data(){
        return{
            posts: [],
            title:"",
            body:"",
            dialogVisible: false,
            modificationValue: '',
            selectedSort:'',
            searchQuery:'',
            sortOptions:[
                {value:"title",name:"По названию"},
                {value:'body', name:"По содержимому"}
            ]
        }
    },
    methods:{
        createPost(post){
            this.posts.push(post)
            this.dialogVisible = false
        },
        inputTitle(e){
            this.title = e.target.value
        },
        inputBody(e){
            this.body = e.target.value
        },
        removePost(post){
            this.posts = this.posts.filter((el) => el.id !== post.id)
        },
        showDialog(){
            this.dialogVisible = true
        },
        async fetchPosts(){
            try {
            const res =  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            this.posts = res.data
            console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted(){
        this.fetchPosts()
    },

    computed:{
        sortedPosts(){
            return [...this.posts].sort((a,b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter((el) => el.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {

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
    .app__btns{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }
</style>