<template>
    <div>
        <form @submit.prevent>
                <h4>Создание поста</h4>
                <my-input v-model="post.title" type="text" placeholder="Name" />
                <my-input v-model="post.body" type="text" placeholder="Description" />
                <my-button class="btn" style="align-self: flex-end; margin-top: 15px;" @click="createPost" >Add</my-button>
        </form>
    </div>
</template>

<script>


export default {

props:{
    posts: {
            type: Array,
        }
},

    data() {
       return {
            post:{
                title:"",
                body:""
            }
        }
    },
    methods:{
        createPost() {
            this.post.id = this.posts.length + 1
            this.$emit("create", this.post)
            this.post ={
                title :'',
                body : '' 
            }
        }
    },
}
</script>

<style scoped >
        .input{
        width: 100%;
        border: 1px solid teal;
        padding: 10px, 15px;
        margin-top: 15px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
</style>