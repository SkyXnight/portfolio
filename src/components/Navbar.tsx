"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/globals.css";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const linkClass = (href: string) =>
        `p-2 tracking-wide transition duration-300 ${
            pathname === href
                ? "text-black underline underline-offset-4"
                : "text-[#575757] hover:text-black"
        }`;

    return (
        <header className="relative z-50 flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16 navbar">
            <Link href="/" className="text-2xl font-black tracking-wider">
                DIAX
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden items-center gap-6 md:flex lg:gap-8">
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
                    className="rounded-lg bg-black px-5 py-2 text-white transition duration-300 hover:opacity-80"
                >
                    CONTACT
                </Link>
            </nav>

            {/* Burger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl md:hidden"
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Mobile Menu */}
            <nav
                className={`absolute left-0 top-full z-50 w-full overflow-hidden bg-white shadow-lg transition-all duration-300 md:hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col gap-5 p-6 text-lg">
                    <Link
                        href="/"
                        className={linkClass("/")}
                        onClick={() => setIsOpen(false)}
                    >
                        HOME
                    </Link>

                    <Link
                        href="/about"
                        className={linkClass("/about")}
                        onClick={() => setIsOpen(false)}
                    >
                        ABOUT
                    </Link>

                    <Link
                        href="/services"
                        className={linkClass("/services")}
                        onClick={() => setIsOpen(false)}
                    >
                        SERVICES
                    </Link>

                    <Link
                        href="/projects"
                        className={linkClass("/projects")}
                        onClick={() => setIsOpen(false)}
                    >
                        PROJECTS
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-lg bg-black p-3 text-center text-white transition duration-300 hover:opacity-80"
                        onClick={() => setIsOpen(false)}
                    >
                        CONTACT
                    </Link>
                </div>
            </nav>
        </header>
    );
}
