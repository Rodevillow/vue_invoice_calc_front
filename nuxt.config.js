export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "VueInvoiceCalc",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  env: {
    firebaseApiKey: process.env.API_KEY || "default value",
    HOST: "https://vue-invoice-calc-back.herokuapp.com",
    PORT: 80
  },

  ssr: false,
  server: {
    protocol: process.env.PROTOCOL,
    host: process.env.HOST,
    port: process.env.PORT
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "assets/styles/global.scss", lang: "scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    "@nuxtjs/style-resources"
  ],

  styleResources: {
    scss: []
  },

  // Bootstrap settings
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.SERVER_HOST || "http://localhost:9000/api/"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
