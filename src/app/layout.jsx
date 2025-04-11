import HeaderComponent from "@/app/components/header/HeaderComponent";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/app/components/footer/FooterComponent";
import { Provider } from "@/app/components/ui/provider"
import { CartProvider } from "./context/cartcontext";
import BannerComponent from "./components/banner/BannerComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html suppressHydrationWarning>
      <body>
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
