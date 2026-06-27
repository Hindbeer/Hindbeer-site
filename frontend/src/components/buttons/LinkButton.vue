<script setup lang="ts">
import { Icon } from '@iconify/vue';

const { title="Text", link="", icon="mdi:heart"} = defineProps<{
    title?: string,
    link?: string,
    icon?: string,
}>();
</script>

<template>
    <a class="link-button" :href=link target="_blank">
        <Icon class="button-icon" :icon=icon width="28" height="28"/>
        {{ title }} 
    </a>
</template>

<style lang="css">
.button-icon {
    color: var(--text-color);
}

.link-button {
    color: var(--text-color);   
    background: var(--bttn-color);

    font-size: 24px;
    font-weight:700;
    text-decoration: none;

    border-radius: 12px;
    
    display: flex;
    align-items: center;
    padding: 12px 24px;
    gap: 12px;
    
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: var(--shadow);
    }
} 
</style>
