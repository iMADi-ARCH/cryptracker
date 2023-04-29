/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: true,
    // serverComponentsExternalPackages: [
    //   "recharts",
    //   "d3-shape",
    //   "d3-scale",
    //   "d3-path",
    //   "d3-array",
    //   "d3-time",
    //   "d3-format",
    //   "d3-interpolate",
    //   "d3-time-format",
    //   "d3-color",
    //   "internmap",
    // ]
  },
  images: {
    domains: ["coinicons-api.vercel.app"],
  },
}

module.exports = nextConfig
