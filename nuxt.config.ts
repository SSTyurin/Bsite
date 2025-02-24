// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  components: true,
  compatibilityDate: '2025-02-24', // Устанавливаем дату совместимости
  app: {
    head: {
      title: 'BioTech Innovations',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})