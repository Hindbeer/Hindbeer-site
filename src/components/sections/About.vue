<script setup>
import { ref } from 'vue'
</script>

<template>
    <section id="about" class="about-section">
        <div class="block main">
            <span class="title-1">About me</span>
            <img class="huh" src="/huh.gif" width="128" height="128" alt="" />
            <div class="description">
                <span class="title-2">Ya balbes</span>
                <span class="main-text">My name is Vadim, I do various things on the Internet <br> Sometimes even something interesting <br> (eto ya)</span>
            </div>
        </div>
    </section>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');

.about-section {
    padding-bottom: 42px;
    padding-top: 42px;
    width: 100%;
    border-bottom: 1px solid;
    border-image: var(--border) 1; 
}

.description {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
}

.huh {
    border-radius: 12px;
    border: 4px solid #4e6851;
    border-radius: 12px;
}
</style>
