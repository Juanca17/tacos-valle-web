import "./globals.css";

export const metadata = {
  title: "Tacos del Valle",
  description: "Una taquería de la vieja escuela con un toque moderno.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    url: "https://tacosvalle.com",
    title: "Tacos Valle - Auténtico Sabor Mexicano",
    description:
      "Descubre los mejores tacos con ingredientes frescos y recetas tradicionales.",
    images: [],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
