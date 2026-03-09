const repoName = "chouf-ugc"

export const basePath = process.env.NODE_ENV === "production" ? `/${repoName}` : ""

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return `${basePath}/${path}`
  }
  return `${basePath}${path}`
}
