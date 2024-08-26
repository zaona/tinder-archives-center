// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/browser-check.ts', '~/plugins/overlayscrollbars.ts'],
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
        { key: 'description', name: '火种档案', content: '一个流浪地球设计资源站' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/tac-logo/symbol-black.svg', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/tac-logo/symbol-white.svg', media: '(prefers-color-scheme: dark)' },
      ],
      script: [
        { 
          defer: true,
          src: 'https://cloud.umami.is/script.js',
          'data-website-id': '42ae9f33-340c-43dc-9807-122b857d5d22'
        }
      ],
      htmlAttrs:{
        'data-overlayscrollbars-initialize': true
      },
      bodyAttrs: {
        'data-overlayscrollbars-initialize': true
      },
    }
  },
})
