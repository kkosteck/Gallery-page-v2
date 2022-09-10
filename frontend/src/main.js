import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import axios from 'axios'
// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

document.title = "Maksiak"
axios.defaults.baseURL = "http://127.0.0.1:8000"
createApp(App)
    .use(i18n)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
