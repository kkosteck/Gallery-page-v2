<template>
    <div ref="localeItem" v-for="(locale, i) in locales" class="navbar-item is-clickable p-1 m-2 pb-2" @click="chooseLanguage(locale, $event)">
        {{ locale }}
    </div>
</template>

<script>
export default {
    name: "LocaleSwitcher",
    data() {
        return { locales: ["pl", "en"] };
    },
    mounted(){
        this.$refs.localeItem.forEach(element => {
            if (element.textContent == this.$i18n.locale){
                element.classList.add("has-text-danger")
                element.classList.add("has-text-weight-bold")
                element.classList.add("has-background-danger-light")
            }
        })
    },
    methods: {
        chooseLanguage(locale, event) {
            this.$refs.localeItem.forEach(element => {
                element.classList.remove("has-text-danger")
                element.classList.remove("has-text-weight-bold")
                element.classList.remove("has-background-danger-light")
            })
            event.target.classList.add("has-text-danger")
            event.target.classList.add("has-text-weight-bold")
            event.target.classList.add("has-background-danger-light")
            this.$i18n.locale = locale
        }
    }
};
</script>
<style scoped>
.navbar-item{
    width: 2rem;
    height: 2rem;
    border-radius: 25%;
    justify-content: center;
}
</style>