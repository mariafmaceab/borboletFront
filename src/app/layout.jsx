import HeaderComponent from "@/components/header/HeaderComponent";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import { Provider } from "@/components/ui/provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Borbolet",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <HeaderComponent/>
          {children}
          <FooterComponent/>
        </Provider>
      </body>
    </html>
  );
}
