// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Test Task',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
  },
  css: [
    '~/assets/style/main.scss'
  ],
  modules: ['nuxt-swiper'],
})
