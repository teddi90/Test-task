<template>
    <AppHeader :info="data" :scrollY="scrollY" />

    <main>
        <div class="container">
            <div class="articles__wrappper">
                <aside class="side-nav">
                    <div class="side-nav__wrapper">
                        <h4 class="side-nav__title">
                            {{ data.testTaskSecondBlockSideNavigationTitle }}
                        </h4>
                        <ul class="side-nav__list">
                            <li
                                v-for="item in articles"
                                :key="item.key"
                                class="side-nav__itet"
                            >
                                <a
                                    :href="'#' + item.key"
                                    class="side-nav__link"
                                    :class="{
                                        active: item.key === currentArticle,
                                    }"
                                    >{{ item.name }}</a
                                >
                            </li>
                        </ul>
                    </div>
                </aside>
                <section class="articles">
                    <h2 class="title">
                        {{ data.testTaskSecondBlockTitle }}
                    </h2>
                    <AppArticle
                        v-for="article in articles"
                        :key="article.key"
                        :article="article"
                        :id="article.key"
                    />
                </section>
            </div>
        </div>
        <section class="slide-section">
            <h2 class="title">{{ data.testTaskSlidesBlockTitle }}</h2>
            <div class="container">
                <Swiper
                    @swiper="onSwiper"
                    :slides-per-view="1"
                    :loop="true"
                    :modules="[Navigation, Pagination]"
                    :pagination="true"
                >
                    <SwiperSlide v-for="slide in slidesData" :key="slide.key">
                        <div class="slide">
                            <div class="slide__info">
                                <h2 class="slide__title">
                                    {{ slide.title }}
                                </h2>
                                <div class="slide__subtitle">
                                    {{ slide.subtitle }}
                                </div>
                                <div
                                    v-html="slide.description"
                                    class="slide__text"
                                ></div>
                                <a :href="slide.buttonLink" class="btn">{{
                                    slide.buttonText
                                }}</a>
                            </div>
                            <div class="slide__img-wrapper">
                                <img
                                    class="slide__img"
                                    :src="slide.image"
                                    :alt="slide.imageAlt"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button
                    class="slide__arrow slide__arrow_prev"
                    @click="swiper.slidePrev()"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 26 24"
                        fill="none"
                    >
                        <path
                            d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <button
                    class="slide__arrow slide__arrow_next"
                    @click="swiper.slideNext()"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 26 24"
                        fill="none"
                    >
                        <path
                            d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM-1.03343e-09 13.5L24 13.5L24 10.5L1.03343e-09 10.5L-1.03343e-09 13.5Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useSwiper } from "swiper/vue";

const swiper = ref(null);
const scrollY = ref(false);
const onSwiper = (instance) => (swiper.value = instance);
const { data: resp } = await useFetch(
    "https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data"
);
const data = ref(resp.value.data.siteData.testTaskTemplate_30_15673 || {});

const articles = ref(
    JSON.parse(data.value?.testTaskSecondDescriptiveBlockItems || "[]")
);
const currentArticle = ref(articles.value[0].key);
const slidesData = ref(
    JSON.parse(data.value?.testTaskSlidesBlockSlides || "[]")
);
onMounted(() => {
    const articlesElm = document.querySelectorAll(".article");
    window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY >= 120 ? true : false;

        articlesElm.forEach((article) => {
            if (window.scrollY >= article.offsetTop - 150) {
                currentArticle.value = article.id;
            }
        });
    });
});
onUnmounted(() => {
    // window.removeEventListener("scroll");
});
</script>

