<template>
    <article class="article">
        <div class="article__img-wrapper">
            <img
                class="article__img"
                :src="article.image"
                :alt="article.imageAlt"
            />
        </div>
        <div class="article__info">
            <h3 class="article__title">{{ article.title }}</h3>
            <h5 class="article__subtitle">{{ article.subtitle }}</h5>
            <div v-html="article.text" class="article__text"></div>
            <a class="btn" :href="article.buttonLink">{{
                article.buttonText
            }}</a>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    article: {
        type: Object,
        default: () => ({}),
    },
});
</script>
