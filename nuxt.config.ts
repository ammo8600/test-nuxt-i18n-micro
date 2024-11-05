// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // extends: '../base-ui',
  // ssr: true,
  modules: ['nuxt-i18n-micro'],
  i18n: {
    debug: true,
    locales: [
      {code: 'en', iso: 'en', disabled: false},
      {code: 'fr', iso: 'fr', disabled: false},
      {code: 'de', iso: 'de', disabled: false},
    ],
    meta: true,
    defaultLocale: 'en',    
    translationDir: 'locales',
    autoDetectLanguage: true,
    autoDetectPath: '/',
    metaBaseUrl: 'https://example.com',
    includeDefaultLocaleRoute: true,
  },
})