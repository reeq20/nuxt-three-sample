export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  mode: 'universal',

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-three-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      // shader
      // config.module.rules.push({
      //   // enforce: 'pre',
      //   test: /\.(fs|vs|frag|vert|glsl)$/,
      //   loader: 'glsl-shader-loader',
      //   exclude: /(node_modules)/,
      // })
      config.module.rules.push({
        // enforce: 'pre'を指定することによって
        // enforce: 'pre'がついていない他のローダーより早く処理が実行されるので
        // 他のローダーで変換されるのを防ぐためにつけておく
        enforce: 'pre',
        test: /\.(fs|vs|frag|vert|glsl)$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      })
    },
  },
}
