/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (repoName ? `/${repoName}` : "")

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
}

export default nextConfig
