<template>
    <a @click="showModal = true">{{title}}</a>
    <Modal v-if="showModal" @close="showModal = false">
        <img v-bind:src="url" alt="" class="box responsive">
    </Modal>
</template>
<script>
import Modal from './Modal.vue';
export default {
    name: "HiddenImage",
    props: [
        "title",
        "url"
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
        width: auto;
        height: 100%;
    }
</style>