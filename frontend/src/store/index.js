import { createStore } from 'vuex'

export default createStore({
	state: {
		token: '',
		isLoading: false,
		permissions: {},
	},
	getters: {
	},
	mutations: {
		initializeStore(state) {
		if (localStorage.getItem('token')) {
			state.token = localStorage.getItem('token')
			state.permissions = JSON.parse(localStorage.getItem('permissions')) ?? {authenticated: true}
		} else {
			state.token = ''
			state.permissions = {}
		}
		},
		setIsLoading(state, status) {
			state.isLoading = status
		},
		setToken(state, token) {
			state.token = token
			state.permissions.authenticated = true
		},
		removeToken(state) {
			state.token = ''
			state.permissions = {}
		},
		setPermissions(state, permissions){
			state.permissions = permissions
		}
	},
	actions: {
	},
	modules: {
	}
})
