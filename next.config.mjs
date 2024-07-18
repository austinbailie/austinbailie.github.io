/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: false,
    },
  },
  images: { unoptimized: true },
};

export default nextConfig;
