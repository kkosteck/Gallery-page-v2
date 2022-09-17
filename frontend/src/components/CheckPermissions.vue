<template>
    <div v-if="allowed">
        <slot></slot>
    </div>
    <div v-else>
        <p class="is-size-3 is-flex is-justify-content-center">{{message}}</p>
    </div>
</template>
<script>
import { inject, ref } from 'vue'
import axios from 'axios'
export default {
    name: "CheckPermissions",
    setup(){
        const permissionsConfig = inject('permissionsConfig')
        return {
            permissionsConfig
        }
    },
    data() {
        return {
            allowed: false,
            message: "",
        }
    },
	watch:{
		$route (to, from){
            const routeRequirements = this.permissionsConfig[to.name]
            let permissions = {}
            this.allowed = false
            this.message = ""
            this.$store.commit('setIsLoading', true)
			axios.get("/api/users/me/").then(response => {
				permissions = {
                    authenticated: true,
					verified: response.data.verified,
				}
				this.$store.commit('setPermissions', permissions)
				localStorage.setItem("permissions", JSON.stringify(permissions))
			}).catch(error => {
				if (error.response.status == 401){
					delete axios.defaults.headers.common["Authorization"]
					this.$store.commit('removeToken')
					localStorage.removeItem("token")
					this.$store.commit('setPermissions', {})
					localStorage.removeItem("permissions")
				}
			}).finally(() =>{
                let allowed = true
                let message = ""
                if (routeRequirements){
                    if (routeRequirements.includes("authenticated") && !permissions["authenticated"]) {
                        allowed = false
                        message = `You have to login in order to see this page!`
                    } else if (routeRequirements.includes("verified") && !permissions["verified"]){
                        allowed = false
                        message = "Your account needs to be verified in order to have access to this page!"
                    }
                }
                this.allowed = allowed
                this.message = message
                this.$store.commit('setIsLoading', false)
            })
    	},
	}
}
</script>