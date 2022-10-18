/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  baseURL: !isDev ? "/traffico-website" : "",
};

module.exports = nextConfig;
