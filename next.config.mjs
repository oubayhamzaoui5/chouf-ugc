/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const repoName = "chouf-ugc"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
