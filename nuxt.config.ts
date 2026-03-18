// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts', '@pinia/nuxt', 'usebootstrap'],
  css: ['./css/main.css'],
  imports: {
    dirs: [
      'stores',
      'layouts',
      'pages',
      'css',
      'components'
    ],
  },
})