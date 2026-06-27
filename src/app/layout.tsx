import type { Metadata } from "next";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/Navbar";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Developer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.className} h-full`}>
            <body className="w-full flex flex-col items-center bg-white text-black antialiased font-medium px-60">
                <Header />
                {children}
            </body>
        </html>
    );
}
