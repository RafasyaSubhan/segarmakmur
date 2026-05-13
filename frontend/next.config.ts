import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Memberi tahu Next.js untuk mem-build aplikasi menjadi file HTML statis
  output: "export",
  
  // Wajib untuk Static Export agar gambar tidak error
  images: {
    unoptimized: true,
  },
  
  basePath: "/segaramakmur", 
};

export default nextConfig;