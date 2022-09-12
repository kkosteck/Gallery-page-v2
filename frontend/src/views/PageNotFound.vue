<template lang="">
    <div class="hero is-halfheight">
        <div class="hero-body is-flex is-justify-content-center">
            <div class='rows'>
                <div class="row is-flex is-justify-content-center is-size-1">
                    <font-awesome-icon icon="fa-solid fa-triangle-exclamation" size="3x" />
                </div>
                <div class="row is-flex is-justify-content-center is-size-2">{{$t('pageNotFound')}}</div>
                <div class="row is-flex is-justify-content-center">
                    Go&nbsp;<a @click="$router.go(-1)">back</a>&nbsp;to previous page
                </div>
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