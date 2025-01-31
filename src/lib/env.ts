export const env = {
  production: process.env.NODE_ENV === 'production',
  development: process.env.NODE_ENV === 'development',
  baseAPI: (process.env.NEXT_PUBLIC_BASE_URL as string) || 'http://[::1]:9999',
  next_auth_url: process.env.NEXTAUTH_URL,
};
