import HeaderComponent from "@/app/components/header/HeaderComponent";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/app/components/footer/FooterComponent";
import { Provider } from "@/app/components/ui/provider"
import { CartProvider } from "./context/cartcontext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Borbolet | Accesorios en mostacilla",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <CartProvider>
          <Provider>
            <HeaderComponent />
            {children}
            <FooterComponent />
          </Provider>
        </CartProvider>
      </body>
    </html>
  );
}
