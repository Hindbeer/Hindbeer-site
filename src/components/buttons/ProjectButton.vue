<script setup>
import { ref } from 'vue'
</script>

<template>
    <section class="list">
        <a class="project-button" href="https://www.youtube.com/watch?v=PLWfYKquxHc">
            <img class="button-image" src="/preview/mimir.png" alt="" />
            <div class="project-text">
                <span class="title-2">Mimir</span>
                <span class="title-3">Book library (under development).</span>
            </div>
        </a>
        <a class="project-button" href="https://github.com/Hindbeer/Oferi">
            <img class="button-image" src="/preview/oferi.jpg" alt="" />
            <div class="project-text">
                <span class="title-2">Oferi</span>
                <span class="title-3">Accepts posts suggested by subscribers, which the administrator can then publish to the channel.</span>
            </div>
        </a>
        <a class="project-button" href="https://t.me/fancy_kuve">
            <img class="button-image" src="/preview/tgk.jpg" alt="" />
            <div class="project-text">
                <span class="title-2">fancy kŭve.</span>
                <span class="title-3">Telegram channel with various pictures and videos.</span>
            </div>
        </a>
        <a class="project-button" href="https://github.com/Hindbeer/SHENZHEN-I-O-rus">
            <img class="button-image" src="/preview/shiorus.png" alt="" />
            <div class="project-text">
                <span class="title-2">SHENZHEN-I-O-rus</span>
                <span class="title-3">A Russifier for SHENZHEN I-O.</span>
            </div>
        </a>
        <a class="project-button" href="https://github.com/Hindbeer/Tanki-2077">
            <img class="button-image" src="/preview/tanki2077.webp" alt="" />
            <div class="project-text">
                <span class="title-2">Tanki 2077</span>
                <span class="title-3">Unity online game on Photon. Made in paris. Also avaible on gamejolt.</span>
            </div>
        </a>
        <a class="project-button" href="https://github.com/Hindbeer/Palette2paintNet">
            <img class="button-image" src="/preview/palette2paintnet.jpg" alt="" />
            <div class="project-text">
                <span class="title-2">Palette2paintNet</span>
                <span class="title-3">Creating a palette from a photograph (or a ready-made palette in photo format) for paint.net.</span>
            </div>
        </a>
        <a class="project-button" href="https://www.youtube.com/watch?v=PLWfYKquxHc">
            <img class="button-image" src="/preview/sampBinder.jpg" alt="" />
            <div class="project-text">
                <span class="title-2">Samp Binber</span>
                <span class="title-3">Bind commands to keys for the game "samp".</span>
            </div>
        </a>
    </section>
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
