<template>
        <button type="button" class="button" :class="page == 'hero' ? 'button__hero': 'button__more'">{{ title }}</button>
</template>

<script setup lang="ts">
defineProps(['title','page'])
</script>

<style scoped lang="scss">
.button {
    padding: 10px 29px;
    line-height: 20px;
    font-size: 14px;
    cursor: pointer;
    max-width: max-content;
    transition: opacity ease-in .2s;

    &:hover {
        opacity: 0.9;
    }
     
    &__hero {
        background-color:var(--logo-bg);
        color: var(--secondary)
    }

    &__more {
        border: 1px solid var(--primary);
        background-color: var(--bg);
    }
}
</style>