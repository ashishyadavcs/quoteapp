/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images:{
      domains:['media.crafto.app','crafto.app']
    }
};

module.exports = nextConfig;
