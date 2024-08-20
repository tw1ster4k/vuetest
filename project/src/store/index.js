import { createApp } from "vue";
import {createStore} from "vuex";

const store = createStore({
    state(){
        return{
            likes:0,
            dislikes:0
        }
    },
    mutations:{
        addLike(state){
            state.likes++
        },
        addDislike(state){
            state.dislikes++
        }
    }
})

const app = createApp({})