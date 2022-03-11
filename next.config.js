/* eslint @typescript-eslint/no-var-requires: 0 */

const withPWA = require("next-pwa")
const { i18n } = require("./next-i18next.config")

module.exports = withPWA({
  i18n,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  experimental: {
    esmExternals: false,
  },
})
