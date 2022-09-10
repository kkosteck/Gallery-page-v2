import { createRouter, createWebHistory } from 'vue-router'
import ImagesView from '@/views/ImagesView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
	{ path: '/', name: 'home', component: HomeView },
	{ path: '/images', name: 'images', component: ImagesView },
	{ path: '/login', name: 'login', component: LoginView },
	{ path: '/signup', name: 'signup', component: SignupView },
	{ path: '/profile', name: 'profile', component: ProfileView },
	{ path: '/:pathMatch(.*)', component: PageNotFound },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
