<template>
<div class="columns">
    <div class="column m-0 p-0" v-for="column in images">
        <figure class="image tile p-2" v-for="image in column">
            <img v-bind:src="image.file" alt="">
        </figure>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import { splitArray } from '@/composables/splitArray'
export default {
    name: "Gallery",
    data() {
        return {
            images: [],
        }
    },
    mounted(){
        this.$store.commit('setIsLoading', false)
        axios.get("/api/images/").then(response =>{
            this.images = splitArray(response.data, 5, true)
        }).finally(() => {
            this.$store.commit('setIsLoading', false)
        })
    }
}
</script>
<style scoped>
</style>