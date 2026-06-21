<script setup>
import { ref } from 'vue'
</script>

<template>
    <section class="menu-bttns">
        <a class="menu-bttn" href="#home">Home</a>
        <a class="menu-bttn" href="#about">About</a>
        <a class="menu-bttn" href="#projects">Projects</a>
    </section>
</template>

<style lang="css">
.menu-bttns {
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    gap: 14px;
}

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
