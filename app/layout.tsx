import type {Metadata} from "next";
import "./globals.css";

import NavbarPartial from "@/components/navbar";
import FooterPartial from "@/components/footer";

import {Inter} from 'next/font/google'
import {Toaster} from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "CookingBook", description: "Crazy Charly Day 2024",
};

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="fr" className={inter.className}>
    <head>
        <link rel="shortcut icon" href="https://asso-ars.fr/images/bac/labac.png" type="image/x-icon"/>
        <title>CookingBook</title>
    </head>
    <body>
    <NavbarPartial/>
    <div className="min-h-screen">
        {children}
        <Toaster/>
    </div>
    <FooterPartial/>
    </body>
</html>)

}
