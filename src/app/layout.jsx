import HeaderComponent from "@/app/components/header/HeaderComponent";
import { Poppins } from "next/font/google";
import FooterComponent from "@/app/components/footer/FooterComponent";
import { Provider } from "@/app/components/ui/provider"
import { CartProvider } from "./context/cartcontext";
import BannerComponent from "./components/banner/BannerComponent";
import Script from "next/script";
import MetaPixelPageView from "./meta/MetaPixelPageView";
import MetaPixel from "./components/meta/MetaPixel";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bisuteria en Colombia | Borbolet",
  description: "Descubre aretas y collares para mujer tejidos a mano con mostacilla checa. Diseños únicos y artesanales que resaltan tu estilo. Compra ahora en Borbolet.",
  keywords: "Accesorios, mostacilla, aretas, collares, aretes con chaquira, aretes bordados",
  robots: "index, follow",
  author: "Maria Fernanda Macea",
  publisher: "Borbolet",
  copyright: "Borbolet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={poppins.className}>
        <MetaPixel />
        <MetaPixelPageView />
        <CartProvider>
          <Provider>
            <BannerComponent/>
            <HeaderComponent />
            {children}
            <FooterComponent />
          </Provider>
        </CartProvider>
         {/* Google tag (gtag.js) */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16711283100" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16711283100');
            `}
          </Script>
      </body>
    </html>
  );
}
