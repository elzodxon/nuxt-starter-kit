import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  alias: {
    '~/*': './*',
  },
  buildModules: [],
  publicRuntimeConfig: {
    publicUrl: process.env.PUBLIC_URL,
  },
  srcDir: './',
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
