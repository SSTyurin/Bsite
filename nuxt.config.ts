// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  components: true,
  compatibilityDate: '2025-02-24',
  modules: ['@nuxtjs/i18n'],  // Добавляем модуль i18n
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ],
    defaultLocale: 'ru',
    langDir: 'locales/',
    strategy: 'no_prefix'  // Без префиксов в URL
  },
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