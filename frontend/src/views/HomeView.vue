<template>
    <div class="hero is-halfheight">
        <div class="hero-body is-flex is-justify-content-center is-size-1">
            <div class='rows'>
                <div class="row has-text-centered">
                    <font-awesome-icon icon="fa-solid fa-paw" color="black" size="4x"/>
                </div>
                <h1 class="row has-text-centered">{{$t('homePage.title')}}</h1>
                <div class="row mt-5">
                    <div class="columns">
					    <router-link to="/gallery" class="button column has-text-centered is-warning is-light is-size-3 m-3">
                            {{$t('homePage.gallery')}}
                        </router-link>
					    <router-link to="/images" class="button column has-text-centered is-primary is-light is-size-3 m-3">
                            {{$t('homePage.images')}}
                        </router-link>
					    <router-link to="/videos" class="button column has-text-centered is-link is-light is-size-3 m-3">
                            {{$t('homePage.videos')}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faPaw } from '@fortawesome/free-solid-svg-icons'
    library.add(faPaw)

    export default {
        
    }
</script>
<style scoped>
    
</style>