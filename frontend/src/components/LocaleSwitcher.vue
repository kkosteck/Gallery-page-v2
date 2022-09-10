<template>
    <div class="select">
        <select v-model="$i18n.locale">
            <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
                {{ locale }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "LocaleSwitcher",
    data() {
        return { locales: ["pl", "en"] };
    }
};
</script>