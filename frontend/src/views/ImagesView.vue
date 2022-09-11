<template>
<div class="is-flex is-justify-content-center p-5">
    <table v-if="isAuthenticated && isVerified" class="table">
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
                    <HiddenMedia v-bind:title="image.title" v-bind:url="image.image"></HiddenMedia>
                </td>
                <td>{{image.description}}</td>
                <td>{{image.created.split("T")[0]}}</td>
                <td>{{image.updated.split("T")[0]}}</td>
            </tr>
        </tbody>
    </table>
    <p class="is-size-3" v-else-if="isAuthenticated">You have to be verified!</p>
    <p class="is-size-3" v-else>You have to <RouterLink to="/login">login</RouterLink> in order to see images</p>
</div>
</template>
<script>
import axios from 'axios'
import HiddenMedia from '@/components/HiddenMedia.vue'
import { showErrorToast } from '@/composables/showErrorToast'

export default {
    name: "Images",
    data() {
        return {
            images: [],
            isAuthenticated: false,
            isVerified: false,
        }
    },
    components: {
        HiddenMedia
    },
    mounted() {
        this.isAuthenticated = this.$store.state.isAuthenticated
        this.getAllImages()
    },
    methods: {
        getAllImages(){
            axios.get("/api/images").then(response =>{
                this.images = response.data
                this.isVerified = true
            }).catch(error =>{
                showErrorToast(error)
            })
        },
    }
}
</script>
<style scoped>
    
</style>