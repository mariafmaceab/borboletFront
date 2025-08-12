import HeaderComponent from "@/app/components/header/HeaderComponent";
import Head from "next/head";
import { Poppins } from "next/font/google";
import FooterComponent from "@/app/components/footer/FooterComponent";
import { Provider } from "@/app/components/ui/provider"
import { CartProvider } from "./context/cartcontext";
import BannerComponent from "./components/banner/BannerComponent";

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
  copyright: "Borbolet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        <meta name="author" content="Maria Fernanda Macéa" />
        <meta name="publisher" content="Borbolet" />
        <meta name="copyright" content="Borbolet" />
        <link
          rel="preload"
          href="/fotoPrincipalMovil.webp"
          as="image"
        />
        <link rel="preload" href="/globals.css" as="style" />
        <link rel="canonical" href="https://borbolet.com.co/" />
      </Head>
      <body className={poppins.className}>
        <CartProvider>
          <Provider>
            <BannerComponent/>
            <HeaderComponent />
            {children}
            <FooterComponent />
          </Provider>
        </CartProvider>
      </body>
    </html>
  );
}
