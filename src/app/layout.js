import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "NotesVerse - Premium Collaborative Notes",
  description: "A premium platform for sharing notes, tracking study time, and gamifying your learning journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-premium-black">
      <body className={`${inter.variable} font-sans antialiased text-white selection:bg-accent-blue selection:text-navy-blue`}>
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
