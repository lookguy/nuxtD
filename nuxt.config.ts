// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/normalize.css', '~/assets/css/initial.css'],
  $production:{
    devtools: { enabled: false },
    app:{
      head:{
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
      },
      pageTransition: { name: 'page', mode: 'out-in' }
    }
  },
  $development: {
    devtools: { enabled: true },
    app: {
      pageTransition: { name: 'page', mode: 'out-in' }
    },
  }
})
