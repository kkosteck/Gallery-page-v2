<template>
    <div class="columns is-flex is-justify-content-center">
        <div class="column is-half">
            <h1 class="row title">Import</h1>
            <form @submit.prevent="submitForm">
                <table v-if="uploads.length" class="table is-striped is-hoverable is-fullwidth is-bordered">
                    <thead>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Filename</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        <tr v-for="upload in uploads" v-bind:key="upload">
                            <td>
                                <div class="field">
                                    <div class="control">
                                        <input type="text" class="input" v-model="upload.title">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="field">
                                    <div class="control">
                                        <textarea class="textarea" v-model="upload.description" rows="1"></textarea>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <HiddenMedia v-bind:title="upload.file.name" v-bind:url="upload.url" v-bind:type="upload.type"></HiddenMedia>
                            </td>
                            <td>
                                <div class="is-flex is-justify-content-center">
                                    <font-awesome-icon class="is-clickable" icon="fa-solid fa-trash" color="red" @click="removeFile(upload, $event)" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="field">
                    <label class="file-label">
                        <span class="file-cta"> 
                            <input class="file-input is-clickable" type="file" multiple @change="handleFiles" accept="image/png,image/gif,image/jpeg,video/mp4,video/x-m4v,video/">
                            <span class="file-icon">
                                <font-awesome-icon icon="fa-solid fa-upload" />
                            </span>
                            <span class="file-label">
                                Choose a files…
                            </span>
                        </span>
                    </label>
                </div>

                <div class="notification is-danger" v-if="errors.length">
                    <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                </div>

                <div class="field">
                    <div class="control">
                        <button :disabled="!uploads.length" class="button is-warning">Import</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import HiddenMedia from '@/components/HiddenMedia.vue'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUpload, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faUpload, faTrash)
import { showErrorToast } from '@/composables/showErrorToast'
export default {
    name: 'AddView',
    data() {
        return {
            uploads: [],
            errors: []
        }
    },
    components: {
        HiddenMedia
    },
    methods: {
        handleFiles(){
            Array.from(event.target.files).forEach(file => {
                console.log(file.type)
                this.uploads.push({
                    file: file,
                    url: URL.createObjectURL(file),
                    type: file.type.match("video.*") ? "video" : "image"
                })
            })
        },
        removeFile(upload, event){
            let parent = event.target.parentElement
            while (parent.tagName != "TR"){
                parent = parent.parentElement
            }
            this.uploads.splice(this.uploads.indexOf(upload), 1)
            parent.remove()
        },
        submitForm() {
            this.uploads.forEach(upload => {
                const formData = {
                    "title": upload.title,
                    "description": upload.description,
                    "file": upload.file
                }
                axios.post("/api/images", formData, { 
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    console.log(response)
                }).catch(error => {
                    showErrorToast(error)
                })
            })
        }
    }
}
</script>
<style scoped>
.file-label{
    display: inline-block;
}
</style>