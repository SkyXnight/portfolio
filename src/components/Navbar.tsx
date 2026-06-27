"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/globals.css";

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (href: string) =>
        `p-2 tracking-wide transition duration-300 ${
            pathname === href
                ? "text-black underline underline-offset-4"
                : "text-[#575757] border-transparent hover:text-black"
        }`;

    return (
        <header className="flex width-200 w-full h-25 items-center justify-between px-10 navbar">
            <Link href="/" className="font-black text-2xl tracking-wider">
                DIAX
            </Link>
            <nav className="flex gap-10">
                <Link href="/" className={linkClass("/")}>
                    HOME
                </Link>
                <Link href="/about" className={linkClass("/about")}>
                    ABOUT
                </Link>
                <Link href="/services" className={linkClass("/services")}>
                    SERVICES
                </Link>
                <Link href="/projects" className={linkClass("/projects")}>
                    PROJECTS
                </Link>
                <Link
                    href="/contact"
                    className="p-2 bg-black rounded-lg text-white font-light  tracking-wide"
                >
                    CONTACT
                </Link>
            </nav>
        </header>
    );
}
