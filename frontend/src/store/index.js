import { createStore } from 'vuex'

export default createStore({
	state: {
		isAuthenticated: false,
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
			state.isAuthenticated = true

			state.permissions = JSON.parse(localStorage.getItem('permissions'))
		} else {
			state.token = ''
			state.permissions = {}
			state.isAuthenticated = false
		}
		},
		setIsLoading(state, status) {
			state.isLoading = status
		},
		setToken(state, token) {
			state.token = token
			state.isAuthenticated = true
		},
		removeToken(state) {
			state.token = ''
			state.isAuthenticated = false
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
