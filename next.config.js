// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "taskapi.hiweb.ir",
//         pathname: "/**",
//         port: "",
//       },
//     ],
//   },
// };
//
// module.exports = nextConfig;
module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taskapi.hiweb.ir",
        pathname: "/**",
        port: "",
      },
    ],
    unoptimized: true,
  },
};
