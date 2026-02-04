import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  // Примечание: modularizeImports для lucide-react не используем,
  // т.к. shadcn/ui импортирует иконки с суффиксом "Icon" (CheckIcon),
  // а файлы называются без него (check.js). Next.js 15 + Webpack 5
  // достаточно хорошо делает tree-shaking из barrel exports.
};

export default nextConfig;
