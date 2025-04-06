// app/layout.js
import { Outfit, Ovo } from "next/font/google";

import CanvasBackground from "./components/CanvasBackground"; // Import the CanvasBackground component
// Import the CanvasBackground component
import './globals.css';


const outfit = Outfit({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Dinesh.",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        {/* Add the CanvasBackground component */}
        <CanvasBackground />
        
        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
