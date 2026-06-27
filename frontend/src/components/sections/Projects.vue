<script setup lang="ts">
import ProjectButton from '../buttons/ProjectButton.vue';

import mimirImage from '../../assets/preview/mimir.png';
import oferiImage from '../../assets/preview/oferi.jpg';
import palette2paintnetImage from '../../assets/preview/palette2paintnet.jpg';
import sampbinderImage from '../../assets/preview/sampBinder.jpg';
import shiorusImage from '../../assets/preview/shiorus.png';
import tankiImage from '../../assets/preview/tanki2077.webp';
import tgkImage from '../../assets/preview/tgk.jpg';

const projects = [
    { title: 'Mimir', description: "Book library (under development)", src: mimirImage, href: "https://github.com/Hindbeer/Mimir" },
    { title: 'Oferi', description: "Accepts posts suggested by subscribers, which the administrator can then publish to the channel.", src: oferiImage, href: "https://github.com/Hindbeer/Oferi" },
    { title: 'fancy kŭve.', description: "Telegram channel with various pictures and videos.", src: tgkImage, href: "https://t.me/fancy_kuve" },
    { title: 'SHENZHEN-I-O-rus', description: "A Russifier for SHENZHEN I-O.", src: shiorusImage, href: "https://github.com/Hindbeer/SHENZHEN-I-O-rus" },
    { title: 'Tanki 2077', description: "Unity online game on Photon. Made in paris. Also avaible on gamejolt.", src: tankiImage, href: "https://github.com/Hindbeer/Tanki-2077" },
    { title: 'Palette2paintNet', description: "Creating a palette from a photograph (or a ready-made palette in photo format) for paint.net.", src: palette2paintnetImage, href: "https://github.com/Hindbeer/Palette2paintNet" },
    { title: 'Samp Binber', description: "Bind commands to keys for the game \"samp\"", src: sampbinderImage, href: "https://www.youtube.com/watch?v=PLWfYKquxHc" },
];

</script>

<template>
    <section id="projects" class="projects-section">
        <div class="block main">
            <span class="title-1">Projects</span>
            <div class="projects-list">
                <ProjectButton 
                    v-for="project in projects" 
                    :key="project.title"
                    :title="project.title"
                    :description="project.description"
                    :src="project.src"
                    :href="project.href"
                />
            </div>
            <span class="title-3">There will be more to come</span>
        </div>
    </section>
</template>

<style lang="css">
.projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    width: 100%;
}

.projects-section {
    padding-bottom: 42px;
    padding-top: 42px;
    width: 100%;
}
</style>
