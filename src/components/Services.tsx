import {
    Laptop,
    Smartphone,
    Code,
    Database,
    Gauge,
    Wrench,
    Zap,
    Shield,
    User,
    ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { Syne, Inter } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Services() {
    return (
        <div className="mt-5 w-full px-5 sm:px-8 lg:px-20">
            {/* HEADER */}
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-10 border-b border-[#4a4a4a]">
                {/* LEFT */}
                <div>
                    <h1
                        className={`${syne.className} text-3xl sm:text-4xl mb-2 font-extrabold`}
                        style={{
                            opacity: 0,
                            animation:
                                "slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                        }}
                    >
                        Services
                    </h1>

                    <span
                        className="text-[#199fff]"
                        style={{
                            opacity: 0,
                            animation: "slideLeft 0.5s ease 0.2s forwards",
                        }}
                    >
                        &#47;&#47; WHAT CAN I HELP YOU WITH
                    </span>

                    <p
                        className={`${inter.className} text-[#5e5e5e] mt-2 tracking-wider leading-5 max-w-md`}
                        style={{
                            opacity: 0,
                            animation: "slideLeft 0.5s ease 0.3s forwards",
                        }}
                    >
                        I build modern, fast and scalable web applications with
                        clean code and great user experience
                    </p>
                </div>

                {/* RIGHT FEATURES */}
                <div className="flex flex-col gap-5">
                    <div
                        className="flex items-start gap-5 w-full max-w-md"
                        style={{
                            opacity: 0,
                            animation: "slideRight 0.5s ease 0.2s forwards",
                        }}
                    >
                        <Zap size={40} />
                        <div>
                            <h1 className="font-bold tracking-wider">
                                Fast & Reliable
                            </h1>
                            <p className="text-[#545454]">
                                I build solutions that are fast, reliable and
                                scalable.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex items-start gap-5 w-full max-w-md"
                        style={{
                            opacity: 0,
                            animation: "slideRight 0.5s ease 0.35s forwards",
                        }}
                    >
                        <Shield size={40} />
                        <div>
                            <h1 className="font-bold tracking-wider">
                                Clean & Maintainable
                            </h1>
                            <p className="text-[#545454]">
                                I write clean, structured and maintainable code.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex items-start gap-5 w-full max-w-md"
                        style={{
                            opacity: 0,
                            animation: "slideRight 0.5s ease 0.5s forwards",
                        }}
                    >
                        <User size={40} />
                        <div>
                            <h1 className="font-bold tracking-wider">
                                Client Focused
                            </h1>
                            <p className="text-[#545454]">
                                I focus on your goals and deliver real value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-14">
                {[
                    {
                        icon: Laptop,
                        title: "WEB DEVELOPMENT",
                        text: "Building modern apps with Next.js, React, TypeScript and Tailwind.",
                        delay: "0.5s",
                    },
                    {
                        icon: Smartphone,
                        title: "RESPONSIVE DESIGN",
                        text: "Mobile-first responsive designs for all devices.",
                        delay: "0.6s",
                    },
                    {
                        icon: Code,
                        title: "UI IMPLEMENTATION",
                        text: "Pixel-perfect conversion of Figma designs into code.",
                        delay: "0.7s",
                    },
                    {
                        icon: Database,
                        title: "BACKEND DEVELOPMENT",
                        text: "APIs and backend logic with Node.js, Prisma and Express.",
                        delay: "0.8s",
                    },
                    {
                        icon: Gauge,
                        title: "PERFORMANCE OPTIMIZATION",
                        text: "Improving speed, SEO and user experience.",
                        delay: "0.9s",
                    },
                    {
                        icon: Wrench,
                        title: "MAINTENANCE & SUPPORT",
                        text: "Ongoing updates, fixes and improvements.",
                        delay: "1.0s",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="flex gap-5 cursor-pointer border border-transparent hover:border-black p-4 rounded-2xl transition-all duration-200"
                        style={{
                            opacity: 0,
                            animation: `fadeUp 0.5s ease ${item.delay} forwards`,
                        }}
                    >
                        <div className="flex flex-col justify-between">
                            <item.icon size={40} />
                            <ArrowUpRight size={25} />
                        </div>

                        <div>
                            <h1 className="font-bold tracking-widest mb-2 text-sm sm:text-base">
                                {item.title}
                            </h1>
                            <p className="text-[#4a4a4a] text-sm sm:text-base">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div
                className="flex flex-col md:flex-row justify-between items-center gap-6 mb-7 mt-6 border-t border-[#2a2a2a] pt-6"
                style={{
                    opacity: 0,
                    animation: "fadeUp 0.5s ease 1.1s forwards",
                }}
            >
                <div className="flex gap-5 items-start">
                    <Image
                        src="/free-paper-plane-icon-svgrepo-com.svg"
                        alt="paper-plane"
                        width={30}
                        height={30}
                    />

                    <div>
                        <h1 className="text-lg font-bold tracking-wider">
                            Have a project in mind?
                        </h1>
                        <p className="tracking-wide text-[#363636]">
                            Let&apos;s build something great together
                        </p>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="flex items-center gap-2 justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-[#363636] transition"
                >
                    Get in touch
                    <ArrowUpRight />
                </Link>
            </div>
        </div>
    );
}
