export const siteEnvironment = process.env.NEXT_PUBLIC_SITE_ENV ?? "local";
export const isPublicPreview = siteEnvironment === "public-preview";
export const adminApiUrl = isPublicPreview ? null : process.env.NEXT_PUBLIC_ADMIN_API_URL ?? "http://localhost:4000";

export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
