/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
       domains: ['avatars.dicebear.com', 'beatrizlarrea.com'] 
    }
}

module.exports = nextConfig
