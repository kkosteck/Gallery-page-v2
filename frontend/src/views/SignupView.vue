<template>
    <div class="columns is-flex is-justify-content-center">
        <div class="column is-half">
            <h1 class="row title">Sign up</h1>
            <form @submit.prevent="submitForm">
                <div class="field">
                    <label>Username</label>
                    <div class="control">
                        <input type="text" class="input" v-model="username">
                    </div>
                </div>
                <div class="field">
                    <label>Password</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password">
                    </div>
                </div>
                <div class="field">
                    <label>Repeat password</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password2">
                    </div>
                </div>

                <div class="notification is-danger" v-if="errors.length">
                    <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-dark">Sign up</button>
                    </div>
                </div>
                <hr>
                Or <router-link to="/login">click here</router-link> to log in!
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { showToast} from '@/composables/showToast'
export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: []
        }
    },
    methods: {
        submitForm() {
            this.$store.commit('setIsLoading', true)
            this.errors = []
            if (this.username === '') {
                this.errors.push('The username is missing')
            }
            if (this.password === '') {
                this.errors.push('The password is too short')
            }
            if (this.password !== this.password2) {
                this.errors.push('The passwords doesn\'t match')
            }
            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }
                axios.post("/api/users/", formData).then(response => {
                    showToast('Account created, please log in!', 'is-success')
                    this.$router.push('/login')
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${error.response.data[property]}`)
                        }
                    } else if (error.message) {
                        this.errors.push('Something went wrong. Please try again')
                    }
                }).finally(()=>{
                    this.$store.commit('setIsLoading', false)
                })
            }
        }
    }
}
</script>