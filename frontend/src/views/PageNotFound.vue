<template lang="">
    <div class="hero is-halfheight">
        <div class="hero-body is-flex is-justify-content-center is-size-1">
            <div class='rows'>
                <div class="row is-flex is-justify-content-center">
                    <font-awesome-icon icon="fa-solid fa-triangle-exclamation" size="3x" />
                </div>
                <div class="row is-text-centered">{{$t('pageNotFound')}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
library.add(faTriangleExclamation)

export default {
    
}
</script>
<style lang="">
</style>