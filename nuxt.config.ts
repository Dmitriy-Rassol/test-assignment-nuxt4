// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
app: {
    head: {
      title: 'Онлайн магазин',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.svg',
      }],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: 'Онлайн магазин обуви',
        },
        {
          name: 'keywords',
          content: 'Обувь, Магазин обуви',
        },
        {
          charset: 'utf-8',
        },
        {
          name: 'color-scheme',
          content: 'only light',
        }
      ],
    },
  },
  css: [
    '~/assets/styles/main.scss'
  ],
  runtimeConfig: {
    public: {
      apiBase: 'https://test-task-api.tapir.ws' 
    }
  }
})
