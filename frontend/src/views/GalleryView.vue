<template>
<div class="columns">
    <div class="column m-0 p-0" v-for="column in images">
        <div class="media-container p-2" v-for="media in column">
            <figure v-if="media.media_type == 'image'" class="image">
                <img v-bind:src="media.file" v-bind:alt="media.title">
            </figure>
            <VideoTile v-else-if="media.media_type=='video'" v-bind:url="media.file"></VideoTile>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import { splitArray } from '@/composables/splitArray'
import VideoTile from '@/components/VideoTile.vue'
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
    },
    components: {
        VideoTile,
    },
}
</script>
<style scoped>
</style>