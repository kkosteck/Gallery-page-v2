import { createRouter, createWebHistory } from 'vue-router'
import ImagesView from '../views/ImagesView.vue'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/images', name: 'images', component: ImagesView },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
