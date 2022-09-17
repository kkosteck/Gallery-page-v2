<template>
<div class="is-flex is-justify-content-center p-5">
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>{{$t('imagesPage.headers.title')}}</th>
                <th>{{$t('imagesPage.headers.description')}}</th>
                <th>{{$t('imagesPage.headers.created')}}</th>
                <th>{{$t('imagesPage.headers.modified')}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="image in images">
                <td>{{image.id}}</td>
                <td>
                    <HiddenMedia v-bind:title="image.title" v-bind:url="image.file"></HiddenMedia>
                </td>
                <td>{{image.description}}</td>
                <td>{{image.created.split("T")[0]}}</td>
                <td>{{image.updated.split("T")[0]}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import axios from 'axios'
import HiddenMedia from '@/components/HiddenMedia.vue'

export default {
    name: "Images",
    data() {
        return {
            images: [],
        }
    },
    components: {
        HiddenMedia
    },
    mounted() {
        this.$store.commit('setIsLoading', false)
        axios.get("/api/images/").then(response =>{
            this.images = response.data
        }).finally(() => {
            this.$store.commit('setIsLoading', false)
        })
    },
}
</script>
<style scoped>
    
</style>