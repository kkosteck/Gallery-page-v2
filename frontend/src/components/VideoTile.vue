<template>
    <div class="video-container">
        <div class="video-controls">
            <progress class="progress video-progress is-warning" v-bind:value="current" v-bind:max="total" @click="changePlayback"></progress> 
        </div>
        <video ref="video" class="image" muted autoplay loop @click="videoPlayback" @timeupdate="videoCurrentTime">
            <source v-bind:src="url" type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {
    name: "VideoTile",
    props: [
        "url",
    ],
    mounted(){
        this.video = this.$refs.video
    },
    data() {
        return {
            video: null,
            current: 0,
            total: 0,
        }
    },
    methods: {
        videoPlayback(event){
            let video = event.target
            if (video.paused){
                video.play()
            } else {
                video.pause()
            }
        },
        videoCurrentTime(event){
            this.current = (event.target.currentTime * 100) >> 0
            this.total = (event.target.duration * 100) >> 0
        },
        changePlayback(event){
            const progressStart = event.target.getBoundingClientRect().left + window.scrollX;
            const progressEnd = progressStart + event.target.offsetWidth;

            const videoSeek = (event.clientX - progressStart) / (progressEnd - progressStart)
            this.video.currentTime = this.video.duration * videoSeek
        }
    }
}
</script>
<style scoped>
    .video-container {
        position: relative;
    }
    .video-controls {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        z-index: 100;
    }
    .video-progress{
        border-radius: 0%;
        height: 0.5rem;
        background: linear-gradient(to top, rgba(0,0,0, .75), transparent);
    }
</style>