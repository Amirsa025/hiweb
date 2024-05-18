/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    skipTrailingSlashRedirect: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "taskapi.hiweb.ir",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;