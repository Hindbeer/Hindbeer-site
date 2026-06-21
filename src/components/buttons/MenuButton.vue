<script setup lang="ts">
const { title="Text", href=""} = defineProps<{
    title?: string,
    href?: string,
}>();
</script>

<template>
    <a class="menu-bttn" :href=href>{{ title }}</a>
</template>

<style lang="css">
.menu-bttn {
    text-decoration: none;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    color: var(--text-color);
    padding: 6px 12px;
}

.menu-bttn:hover {
    background: var(--menu-bttn-color);
    border-radius: 6px;
}
</style>
