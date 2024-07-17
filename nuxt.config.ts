// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: '火种档案',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Global page description' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/tac-logo/symbol-black.svg', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/tac-logo/symbol-white.svg', media: '(prefers-color-scheme: dark)' },
      ]
    }
  },
})
