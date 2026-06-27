<script setup lang="ts">
import LogoButton from '../buttons/LogoButton.vue';
import MenuButton from '../buttons/MenuButton.vue';
</script>

<template>
    <header>
        <div class="navigation"> 
            <LogoButton title="kŭve." href="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>
            <nav class="menu-bttns">
                <MenuButton title="Home" href="#home"/> 
                <MenuButton title="About" href="#about"/> 
                <MenuButton title="Projects" href="#projects"/> 
            </nav> 
        </div>
    </header>
</template>

<style>
.menu-bttns {
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    gap: 14px;
}

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
