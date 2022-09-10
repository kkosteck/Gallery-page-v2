<template>
    <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content is-inline-flex">
            <div class="is-flex is-justify-content-center">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>
<script>
export default {
    name: "modal",
}
</script>
<style scoped>
</style>