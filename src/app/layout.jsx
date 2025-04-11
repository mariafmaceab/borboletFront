import HeaderComponent from "@/app/components/header/HeaderComponent";
import { Poppins } from "next/font/google";
import "./globals.css";
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
  title: "Accesorios en mostacilla | Borbolet",
  description: "Descubre aretes y collares tejidos a mano con mostacilla checa. Diseños únicos y artesanales que resaltan tu estilo. Compra ahora en Borbolet.",
  keywords: "Accesorios, mostacilla, aretes, collares, aretes con chaquira, aretes bordados",
  robots: "index, follow",
  author: "Maria Fernanda Macea",
  copyright: "Borbolet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/Movil%20(1)%20(1).webp"
          type="image/webp"
        />
      </head>
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
