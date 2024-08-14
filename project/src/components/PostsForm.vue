<template>
    <div>
        <form @submit.prevent>
                <h4>Создание поста</h4>
                <input v-model="post.title"  class="input" type="text" placeholder="Name" />
                <input v-model="post.body"  class="input" type="text" placeholder="Description" />
                <button class="btn" @click="createPost" >Add</button>
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
    }
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
    .btn{
        padding: 10px, 15px;
        background: none;
        color: teal;
        margin-top: 15px;
        align-self: flex-end;
        border: 1px solid teal;
    }
</style>