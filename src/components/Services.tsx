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
        <div className="mt-5 w-full">
            <div className="flex gap-10 justify-between px-20 pb-10 border-b border-[#4a4a4a]">
                <div>
                    <h1
                        className={`${syne.className} text-4xl mb-2 font-extrabold`}
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
                        className={`${inter.className} text-[#5e5e5e] w-110 mt-2 tracking-wider leading-5`}
                        style={{
                            opacity: 0,
                            animation: "slideLeft 0.5s ease 0.3s forwards",
                        }}
                    >
                        I build modern, fast and scalable web applications with
                        clean code and great user experience
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div
                        className="flex items-center gap-7 w-90"
                        style={{
                            opacity: 0,
                            animation: "slideRight 0.5s ease 0.2s forwards",
                        }}
                    >
                        <Zap size={50} />
                        <div>
                            <h1 className="font-bold tracking-wider">
                                Fast & Reliable
                            </h1>
                            <p className="text-[#545454] tracking-wide">
                                I build solutions that are fast, reliable and
                                built to scale.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-center gap-7 w-90"
                        style={{
                            opacity: 0,
                            animation: "slideRight 0.5s ease 0.35s forwards",
                        }}
                    >
                        <Shield size={50} />
                        <div>
                            <h1 className="font-bold tracking-wider">
                                Clean & Maintainable
                            </h1>
                            <p className="text-[#545454] tracking-wide">
                                I write clean, well-structured code that&apos;s
                                easy to maintain.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-center gap-7 w-90"
                        style={{
                            opacity: 0,
                            animation: "slideRight 0.5s ease 0.5s forwards",
                        }}
                    >
                        <User size={50} />
                        <div>
                            <h1 className="font-bold tracking-wider">
                                Client Focused
                            </h1>
                            <p className="text-[#545454] tracking-wide">
                                I focus on your goals and deliver solutions that
                                add read value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-10 mb-14">
                <div
                    className="flex justify-center gap-5 w-full cursor-pointer h-30 border border-transparent py-2 rounded-2xl transition-all duration-200 hover:border hover:border-[#000000]"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 0.5s forwards",
                    }}
                >
                    <div className="flex flex-col justify-between">
                        <Laptop size={45} />
                        <ArrowUpRight size={30} />
                    </div>
                    <div>
                        <h1 className="font-bold tracking-widest mb-2">
                            WEB DEVELOPMENT
                        </h1>
                        <p className="text-[#4a4a4a] tracking-wider w-75">
                            Building modern web applications using Next.js,
                            React, TypeScript and Tailwind CSS.
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center gap-5 w-full cursor-pointer h-30 border border-transparent p-2  rounded-2xl transition-all duration-200 hover:border hover:border-[#000000]"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 0.6s forwards",
                    }}
                >
                    <div className="flex flex-col justify-between">
                        <Smartphone size={45} />
                        <ArrowUpRight size={30} />
                    </div>
                    <div>
                        <h1 className="font-bold tracking-widest mb-2">
                            RESPONSIVE DESIGN
                        </h1>
                        <p className="text-[#4a4a4a] tracking-wider w-75">
                            Creating responsive and mobile-friendly designs that
                            work perfectly on all devices.
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center gap-5 w-full cursor-pointer h-30 border border-transparent p-2  rounded-2xl transition-all duration-200 hover:border hover:border-[#000000]"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 0.7s forwards",
                    }}
                >
                    <div className="flex flex-col justify-between">
                        <Code size={45} />
                        <ArrowUpRight size={30} />
                    </div>
                    <div>
                        <h1 className="font-bold tracking-widest mb-2">
                            UI IMPLEMENTATION
                        </h1>
                        <p className="text-[#4a4a4a] tracking-wider w-75">
                            Turning Figma designs into clean, pixel-perfect and
                            interactive interfaces.
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center gap-5 w-full cursor-pointer h-30 border border-transparent p-2  rounded-2xl transition-all duration-200 hover:border hover:border-[#000000]"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 0.8s forwards",
                    }}
                >
                    <div className="flex flex-col justify-between">
                        <Database size={45} />
                        <ArrowUpRight size={30} />
                    </div>
                    <div>
                        <h1 className="font-bold tracking-widest mb-2">
                            BACKEND DEVELOPMENT
                        </h1>
                        <p className="text-[#4a4a4a] tracking-wider w-75">
                            Building RESTful APIs and server side logic with
                            Node.js, Express and Prisma.
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center gap-5 w-full cursor-pointer h-30 border border-transparent p-2 rounded-2xl transition-all duration-200 hover:border hover:border-[#000000]"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 0.9s forwards",
                    }}
                >
                    <div className="flex flex-col justify-between">
                        <Gauge size={45} />
                        <ArrowUpRight size={30} />
                    </div>
                    <div>
                        <h1 className="font-bold tracking-widest mb-2">
                            PERFORMANCE OPTIMIZATION
                        </h1>
                        <p className="text-[#4a4a4a] tracking-wider w-75">
                            Improving website speed, performance, SEO and
                            overall user experience.
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center gap-5 w-full cursor-pointer h-30 border border-transparent p-2 rounded-2xl transition-all duration-200 hover:border hover:border-[#000000]"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 1.0s forwards",
                    }}
                >
                    <div className="flex flex-col justify-between">
                        <Wrench size={45} />
                        <ArrowUpRight size={30} />
                    </div>
                    <div>
                        <h1 className="font-bold tracking-widest mb-2">
                            MAINTENANCE & SUPPORT
                        </h1>
                        <p className="text-[#4a4a4a] tracking-wider w-75">
                            Providing ongoing support, bug fixes, updates and
                            improvements.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="flex justify-between items-center"
                style={{
                    opacity: 0,
                    animation: "fadeUp 0.5s ease 1.1s forwards",
                }}
            >
                <div className="flex gap-5">
                    <Image
                        src="/free-paper-plane-icon-svgrepo-com.svg"
                        alt="paper-plain"
                        width={30}
                        height={30}
                    />
                    <div>
                        <h1 className="text-lg font-bold tracking-wider">
                            Have a project in mind?
                        </h1>
                        <p className="tracking-wide text-[#363636]">
                            Let&apos;s work together to build something great
                        </p>
                    </div>
                </div>
                <div>
                    <Link
                        href="/contact"
                        className="flex items-center justify-center transition-all duration-200 hover:bg-[#363636] tracking-wide px-3 rounded-lg py-2 bg-black text-white"
                    >
                        Get in touch
                        <ArrowUpRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}
