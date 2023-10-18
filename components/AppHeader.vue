<template>
    <header class="header" :class="{ header_padding: scrollY === true }">
        <div class="container">
            <nav class="nav">
                <a href="#" class="header__logo">Logo</a>
                <ul class="menu">
                    <li class="menu__item">
                        <NuxtLink to="/" class="menu__link">nav1</NuxtLink>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link">nav2</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__link">nav3</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="header-slider">
        <Swiper
            :slides-per-view="1"
            :navigation="true"
            :loop="true"
            :modules="[SwiperAutoplay, Navigation]"
            :autoplay="{
                delay: 8000,
            }"
        >
            <SwiperSlide v-for="slide in 3" :key="slide">
                <div class="container">
                    <div v-if="info" class="header-slide">
                        <div class="header-slide__info">
                            <h2 class="header-slide__title">
                                {{ info.testTaskHeaderTitle }}
                            </h2>
                            <div class="header-slide__subtitle">
                                {{ info.testTaskHeaderSubtitle }}
                            </div>
                            <div
                                v-html="info.testTaskHeaderText"
                                class="header-slide__text"
                            ></div>
                            <button class="btn">Read More</button>
                        </div>
                        <img
                            class="header-slide__img"
                            :src="info.testTaskHeaderImage"
                            :alt="info.testTaskHeaderImageAltText"
                        />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Navigation } from "swiper/modules";

const props = defineProps({
    info: {
        type: Object,
        default: () => ({}),
    },
    scrollY: {
        type: Boolean,
        default: false,
    },
});
</script>

