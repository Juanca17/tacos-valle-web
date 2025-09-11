/* eslint-disable @next/next/no-img-element */
// app/layout.js
import "./globals.css";
import { basePath } from "./config";
import Script from "next/script";

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
    <html lang="es">
      <head>
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '802987658475887');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        {/* NoScript fallback para navegadores sin JS */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=802987658475887&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
