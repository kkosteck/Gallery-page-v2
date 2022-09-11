<template>
    <div class="hero is-halfheight">
        <div class="hero-body is-flex is-justify-content-center">
            <button class="button is-success" @click="getInfo()">TESTUJ</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    methods: {
        getInfo(){
            axios.get("/api/users/me").then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
    
</style>