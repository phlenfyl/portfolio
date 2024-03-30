import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Dm to know more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className= {`${inter.className} max-w-screen-2xl mx-auto font-san bg-gray-900 overflow-x-hidden`}>
        <link rel="icon" href="/meshez.png" sizes="any" />
        <Loading />
        <div className="overflow-x-hidden">
          <Navbar />
          {children}
          <Footer/>
        </div>          
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
