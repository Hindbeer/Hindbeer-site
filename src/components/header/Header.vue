<script setup>
import { ref } from 'vue'
import LogoButton from '../buttons/LogoButton.vue';
import MenuButton from '../buttons/MenuButton.vue';

const count = ref(0)
</script>

<template>
    <header>
        <div class="navigation"> 
            <LogoButton />
            <MenuButton />    
        </div>
    </header>
</template>

<style>
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto; 
}

header {
    position: fixed;
    top: 0;
    left: 0;
    height: var(--header-height);
    display: flex;
    align-items: center;
    
    width: 100%;
    border-bottom: 1px solid;
    border-image: var(--border) 1;

    backdrop-filter: blur(6px);
    background: rgba(26, 26, 26, 0.8);
}

</style>
