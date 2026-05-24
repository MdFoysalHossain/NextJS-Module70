import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartProvider from "@/Context/CartProvider";
import Navbar from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gustov",
  description: "Gustove is a culinary haven where passion meets flavor. Our restaurant is dedicated to crafting unforgettable dining experiences, blending exquisite dishes with warm hospitality. From farm-fresh ingredients to innovative recipes, we invite you to savor the art of gastronomy in every bite. Join us at Gustov and embark on a journey of taste that will delight your senses and create lasting memories.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-screen antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col ">
        <CartProvider>
          <Navbar />

          <main className="flex-1 p-10">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
