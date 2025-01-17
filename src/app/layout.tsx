import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast'; 
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Toaster />
        </body>
    </html>
  );
}

const NavBar = () => {
  return (<div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href="/" className="btn btn-ghost text-xl">Stripe for SaaS</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li >
          <Link href="/" className="btn">Home</Link>
        </li>
        <li >
          <Link href="/photos" className="btn mx-3">Photos</Link>
        </li>
        <li >
          <Link href="/user" className="btn mx-3">User Auth</Link>
        </li>
      </ul>
    </div>
  </div>)
};