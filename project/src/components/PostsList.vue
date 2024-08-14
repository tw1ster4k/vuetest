<template>
    <div>
        <div class="post"  v-for="post in posts">
            <div><strong>Name:</strong>{{ post.title }}</div>
            <div><strong>Description:</strong>{{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            requared: true
        }
    }
}
</script>

<style scored >
        .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>