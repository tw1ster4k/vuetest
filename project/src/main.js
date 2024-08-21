import { createApp } from 'vue'
import App from "./App.vue"
import components from './components/UI/index.js'
import router from "./components/router/routers.js"
import store from "./store/index.js"



const app = createApp(App)

components.forEach((component) => {
    app.component(component.name, component)
})

app.use(router).use(store).mount("#app")

