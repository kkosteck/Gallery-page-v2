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
                    <HiddenImage v-bind:title="image.title" v-bind:url="image.image"></HiddenImage>
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
import HiddenImage from '@/components/HiddenImage.vue'

export default {
    name: "Images",
    data() {
        return {
            images: []
        }
    },
    components: {
        HiddenImage
    },
    mounted() {
        this.getAllImages() 
    },
    methods: {
        getAllImages(){
            axios.get("/api/images").then(response =>{
                this.images = response.data
            }).catch(error =>{
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
    
</style>