<script setup>
import { ref } from 'vue'
import ProjectButton from '../buttons/ProjectButton.vue';
</script>

<template>
    <section id="projects" class="projects-section">
        <div class="block main">
            <span class="title-1">Projects</span>
            <ProjectButton />
            <span class="title-3">There will be more to come</span>
        </div>
    </section>
</template>

<style lang="css">
.projects-section {
    padding-bottom: 42px;
    padding-top: 42px;
    width: 100%;
}
</style>
