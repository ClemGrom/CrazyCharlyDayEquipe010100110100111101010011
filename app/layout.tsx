import type {Metadata} from "next";
import "./globals.css";
import NavbarPartial from "@/components/navbar";
import FooterPartial from "@/components/footer";

export const metadata: Metadata = {
    title: "CookingBook", description: "Crazy Charly Day 2024",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="fr">
    <body>
    <NavbarPartial/>
    <div className="min-h-screen">
        {children}
    </div>
    <FooterPartial/>
    </body>
    </html>);
}
