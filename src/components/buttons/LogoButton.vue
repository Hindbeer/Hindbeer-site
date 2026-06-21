<script setup>
import { ref } from 'vue'
</script>

<template>
    <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" class="logo-bttn">
        <img class="tuh" src="/tuh.gif" alt="logo" />
        <span class="name">kŭve.</span>
    </a>
</template>

<style lang="css">
.tuh {
    border: 2px solid var(--border-logo-color);
    border-radius: 12px;

    width: 36px;
    height: 36px;
}
    
.name {
    color: var(--text-color);

    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
}

.logo-bttn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 18px;

    transform-origin: center center;
    transition: transform 0.5s ease;

    text-decoration: none;
}
.logo-bttn:hover {
    transform: scale(1.2);
}
</style>
