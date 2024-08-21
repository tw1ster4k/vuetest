<template>
    <div class="div">
        <button @click="$store.commit(`incrementLike`)" class="btn btn__like">Like</button>
        <button @click="$store.commit('incrementDislike')" class="btn btn__dislike">Dislike</button>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped >
    
    .div{
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: space-evenly;
        align-items: center;
    }
    
    .btn{
        height: 30px;
        width: 100px;
        border:none;
        border-radius: 10px;
        color:white;
        cursor: pointer;
    }
    
    .btn.btn__like{
        background: teal;
    }
    
    .btn.btn__dislike{
        background: rgb(255, 0, 43);
    }
    
    .btn:active{
        opacity: 0.5;
    }
    
</style>