import "./globals.css";
import { basePath } from "./config";

export const metadata = {
  title: "Tacos del Valle",
  description:
    "En Tacos Del Valle nos encanta experimentar y reinventar un poco la cocina mexicana. Aquí, cada taco es único, mezclando sabores y texturas que te sorprenderán. Nuestro espacio también es especial, transportándote a la era dorada de las cenadurías en México con un ambiente nostálgico y acogedor.",
  icons: {
    icon: `${basePath}/favicon/favicon.ico`,
    shortcut: `${basePath}/favicon/favicon.ico`,
    apple: `${basePath}/favicon/apple-touch-icon.png`,
    other: [
      {
        rel: "icon",
        url: `${basePath}/favicon/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: `${basePath}/favicon/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: `${basePath}/favicon/site.webmanifest`,
  openGraph: {
    url: "https://tacosvalle.com",
    title: "Tacos Del Valle",
    description:
      "En Tacos Del Valle nos encanta experimentar y reinventar un poco la cocina mexicana. Aquí, cada taco es único, mezclando sabores y texturas que te sorprenderán. Nuestro espacio también es especial, transportándote a la era dorada de las cenadurías en México con un ambiente nostálgico y acogedor.",
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
