/** @type {import('next').NextConfig} */
const withPwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPwa({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
  }
})
