<script setup>
import { ref } from 'vue'
import LinkButton from '../buttons/LinkButton.vue';
</script>

<template>
    <section id="home" class="home-section">
        <div class="block main">
            <div class="pepe">
                <img src="/peepoChat.gif" width="248" height="248" alt="" />
                <span class="main-description">
                    Hi all, I'm 
                    <span class="kuve">kuve</span>! Sometimes I do <br> something interesting
                </span>
            </div>
            <div class="link-block">
                <LinkButton title="Telegram" link="https://t.me/kuvedot" icon="ic:baseline-telegram"/>
                <LinkButton title="GitHub" link="https://github.com/Hindbeer" icon="mdi:github"/>
                <LinkButton title="Youtube" link="https://www.youtube.com/@kuve." icon="entypo-social:youtube-with-circle"/>
                <LinkButton title="X.com" link="https://x.com/Kuvedawe" icon="entypo-social:twitter-with-circle"/>
                <LinkButton title="Email" link="mailto:anonelifof@gmail.com" icon="streamline-ultimate:read-email-at-1-bold"/>
            </div>
        </div>
    </section>
</template>

<style lang="css">
.home-section {
    display: flex;
    flex-direction: column;
    row-gap: 42px;
    padding-bottom: 42px;
    padding-top: calc(42px + var(--header-height));
    width: 100%;

    background: var(--bg-gradient);

    border-bottom: 1px solid;
    border-image: var(--border) 1; 
}

.pepe {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    row-gap: 12px;
}

.kuve {
    font-family: "Modak", sans-serif;
    font-weight: 400;
}

.main-description {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    color: var(--text-color);
    font-family: "Roboto", sans-serif;
}

.link-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px
}
</style>
