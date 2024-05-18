/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "taskapi.hiweb.ir",
                pathname: "/Images/**", // Corrected pathname pattern
            },
        ],
    },
};

export default nextConfig;