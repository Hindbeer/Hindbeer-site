<script setup lang="ts">
const { title="Text", href="", description="Text", src=""} = defineProps<{
    title?: string,
    href?: string,
    description?: string,
    src?: string
}>();
</script>

<template>
    <a class="project-button" :href=href>
        <img class="button-image" :src=src alt="" />
        <div class="project-text">
            <span class="title-2">{{ title }}</span>
            <span class="title-3">{{ description }}</span>
        </div>
    </a>
</template>

<style lang="css">
.list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    width: 100%;
}

.project-button {
    border: 2px solid var(--project-bttn-border);
    border-radius: 18px;
    background: var(--project-bttn-color);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
}

.project-button:hover {
    border: 2px solid var(--project-bttn-border-hover);
    background: var(--project-bttn-color-hover);
}

.button-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.project-text {
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 3px;
    padding: 10px;
}
</style>
