import { createApp } from 'vue'
import axios from 'axios'
import i18n from './i18n'
import router from './router'
import store from './store'
import App from './App.vue'

// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
document.title = "Maksiak"
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL || "http://127.0.0.1:8000"
const app = createApp(App)
fetch(process.env.BASE_URL + "permissions.json").then((response) => response.json()).then((config) => {
    app.provide('permissionsConfig', config)
}).finally(() => {
    app.use(i18n).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
})
