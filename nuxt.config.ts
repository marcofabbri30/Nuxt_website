export default defineNuxtConfig({
  app: {
    head: {  
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',   
      title:"Marco Fabbri - Software Engineer"      
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
