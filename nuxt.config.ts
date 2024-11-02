// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/normalize.css', '~/assets/css/initial.css'],
  $production:{
    devtools: { enabled: false }
  },
  $development: {
    devtools: { enabled: true }
  }
})
