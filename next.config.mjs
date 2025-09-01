/** @type {import('next').NextConfig} */
const nextConfig = {
  // Indica a Next que genere un sitio 100% estático en /out
  output: "export",

  // Si usas <Image> de next/image o imágenes remotas, evita optimización en runtime
  images: { unoptimized: true },

  // Opcional: útil en hostings que exigen slash final (Apache/Nginx estático)
  // trailingSlash: true,
};

export default nextConfig;
