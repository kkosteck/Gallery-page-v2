<template>
	<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item is-light">
				<font-awesome-icon icon="fa-solid fa-paw" size="2x"/>
			</router-link>
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navbar-menu" class="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
			<div class="navbar-start">
				<router-link to="/images" class="navbar-item is-light">{{$t('navbar.images')}}</router-link>
				<router-link to="/videos" class="navbar-item is-light">{{$t('navbar.videos')}}</router-link>
				<router-link to="/gallery" class="navbar-item is-light">{{$t('navbar.gallery')}}</router-link>
			</div>
			<div class="navbar-end">
				<div class="navbar-item">
					<LocaleSwitcher></LocaleSwitcher>
				</div>
				<div v-if="this.$store.state.isAuthenticated" class="navbar-item has-dropdown is-hoverable">
					<div class="navbar-item">
						<font-awesome-icon icon="fa-regular fa-user" size="2x" />
					</div>
					<div class="navbar-dropdown is-right">
						<router-link class="navbar-item" to="/profile">Profile</router-link>
						<hr class="navbar-divider">
						<a class="navbar-item" @click="logout()">Logout</a>
					</div>
				</div>
				<div v-else class="navbar-item">
					<router-link to="/login" class="button is-light">{{$t('navbar.login')}}</router-link>
				</div>
			</div>
		</div>
	</nav>
	<router-view></router-view>
</template>

<script>
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faPaw, faUser)
import LocaleSwitcher from './components/LocaleSwitcher.vue'

export default {
	beforeCreate() {
		this.$store.commit('initializeStore')
		const token = this.$store.state.token
		if (token) {
			axios.defaults.headers.common['Authorization'] = "Token " + token
		} else {
			axios.defaults.headers.common['Authorization'] = ""
		}
	},
	data() {
		return {
			showMobileMenu: false,
		}
	},
	components: {
		LocaleSwitcher
	},
	methods: {
		logout(){
			this.$store.commit('removeToken')
			localStorage.removeItem("token")
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
