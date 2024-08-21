import { createStore } from "vuex"

export default createStore({
    state:{
        likes:0,
        dislikes:0
    },
    getters:{

    },
    mutations: {
        incrementLike(state){
            state.likes += 1
        },
        incrementDislike(state){
            state.dislikes += 1
        }
    },
    actions:{

    },
    modules:{

    }
}) 