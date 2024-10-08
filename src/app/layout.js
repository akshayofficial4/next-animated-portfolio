import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshay sunil Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= { `${inter.className} bg-gradient-to-r from-blue-100 to-red-200 ` }>
        <TransitionProvider>{ children }</TransitionProvider>
      </body>
    </html>
  );
}
