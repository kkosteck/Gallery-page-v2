<template>
    <a class="has-tooltip-warning" v-bind:data-tooltip="title" @click="showModal = true">show</a>
    <Modal v-if="showModal" @close="showModal = false">
        <video v-if="type=='video'" controls class="box responsive-video">
            <source v-bind:src="url" type="video/mp4">
        </video> 
        <img v-else v-bind:src="url" alt="" class="box responsive">
    </Modal>
</template>
<script>
import Modal from './Modal.vue';
export default {
    name: "HiddenMedia",
    props: [
        "title",
        "url",
        "type"
    ],
    components: {
        Modal
    },
    data() {
        return {
            showModal: false
        }
    },
}
</script>
<style scoped>
    .responsive {
        margin: auto;
        width: auto;
        height: 100%;
    }
    .responsive-video {
        margin: auto;
        width: inherit;
        height: inherit;
    }
</style>