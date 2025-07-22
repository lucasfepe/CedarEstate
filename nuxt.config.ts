// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: 'Cedars Estate - Coming Soon',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cedars Estate - Luxury Living Coming Soon' }
      ],
      link: [
        // Primary font for headings - elegant serif
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;700&display=swap'
        },
        // Secondary font for body text - clean sans-serif
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})