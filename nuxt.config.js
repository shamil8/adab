// Some constants
const baseUrl = process.env.API_URL || 'http://localhost:8080'
const title = 'Education portal'
const description = 'Education portal description.'


export default {
  // target: 'server', // (For deployment https://nuxtjs.org/docs/2.x/get-started/commands/)
  // env: process.env,
  messages: {
    error_404: 'Страница не найдена. Начните с главной.'
  },

  /*
  ** Headers of the page
  */
  head: {
    title,
    titleTemplate: '%s — ' + title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffcc33' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/scss/default.scss',
    './assets/scss/element-ui.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/nuxt-client-init'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~assets/scss/vars/*.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /**
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  axios: {
    debug: process.env.NODE_ENV === 'development',
    proxy: true
  },
  proxy: {
    '/api/auth_token': {
      target: baseUrl,
      pathRewrite: { '^/api/auth_token' : '/auth_token' }
    },
    '/api/logout': {
      target: baseUrl,
      pathRewrite: { '^/api/logout' : '/logout' }
    },
    '/api/users': { target: baseUrl },  // it didn't work if we set it after api user!
    '/api/user': {
      target: baseUrl,
      pathRewrite: { '^/api/user' : '/user' }
    },
    '/api': {
      target: baseUrl,
      changeOrigin: true
    }
  },

  moment: {
    locales: ['tg']
  },

  // Manifest override
  manifest: {
    name: title,
    short_name: title,
    description,
    lang: 'ru-RU',
    background_color: '#ffcc33',
    display: 'standalone',
    crossorigin: 'use-credentials',
    gcm_sender_id: '103953800507'
  }
}
