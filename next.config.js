/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        FRONT_URL: process.env.FRONT_URL,
        BACKEND_URL: process.env.BACKEND_URL,
    }
}

module.exports = nextConfig
