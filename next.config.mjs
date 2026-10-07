/** @type {import('next').NextConfig} */
const nextConfig = {output:'export',trailingSlash:true,distDir:process.env.NODE_ENV==='production'?'.next':'.next-dev',images:{unoptimized:true},experimental:{cpus:1,workerThreads:false}};
export default nextConfig;
