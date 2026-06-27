import Image from "next/image";
import Link from "next/link";
import { Syne } from "next/font/google";
import { Inter } from "next/font/google";
import { Mail, FolderOpen } from "lucide-react";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import "../styles/globals.css";

const syne = Syne({ weight: "800", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="flex items-center h-auto mt-25 bg-transparent gap-25 p-10">
                <div>
                    <div className="flex flex-col items-center">
                        <h1
                            className={`text-6xl ${syne.className} mb-2 hero-title`}
                        >
                            Hi, I&apos;m Diax
                        </h1>
                        <span className="text-[#ff0000] tracking-wide hero-role">
                            &#47;&#47; FULLSTACK DEVELOPER
                        </span>
                        <p
                            className={`w-100 text-[#5e5e5e] mt-4 mb-7 text-lg/1.6 ${inter.className} text-center hero-desc`}
                        >
                            I specialize in high-performance web applications
                            with a focus on clean code and aesthetics. I help
                            brands bring their ideas to life using modern
                            technologies and a thoughtful user experience.
                        </p>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/projects"
                            className="flex gap-2 items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-[#363636] transition-all duration-200 will-change-transform hover:-translate-y-0.5 hero-btns"
                        >
                            <FolderOpen />
                            View Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="flex gap-2 items-center border px-3 py-2 rounded-lg hover:bg-[#c9c9c9] transition-all duration-200 will-change-transform hover:-translate-y-0.5 hero-btns"
                        >
                            <Mail />
                            Contact Me
                        </Link>
                    </div>
                    <div className="flex gap-8 justify-center mt-6">
                        <Link
                            href="https://github.com/SkyXnight"
                            target="_blank"
                            className="hero-socials"
                        >
                            <SiGithub
                                size={30}
                                className="backface-visibility-hidden will-change-transform hover:scale-110 transition-all duration-200"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/diax-night-9a7197415/"
                            target="_blank"
                            className="hero-socials"
                        >
                            <FaLinkedin
                                size={30}
                                className="backface-visibility-hidden will-change-transform hover:scale-110 transition-all duration-200"
                            />
                        </Link>
                        <Link
                            href="https://t.me/boropolop"
                            target="_blank"
                            className="hero-socials"
                        >
                            <SiTelegram
                                size={30}
                                className="backface-visibility-hidden will-change-transform hover:scale-110 transition-all duration-300"
                            />
                        </Link>
                    </div>
                </div>
                <Image
                    src="/avatar.jpg"
                    alt="avatar"
                    width={450}
                    height={450}
                    className="rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,1)] hero-photo"
                />
            </div>
            <div className="flex items-center gap-2 justify-center mt-10 tech-bar">
                <div
                    className="flex items-center gap-2 tech-item"
                    style={{ animationDelay: "0.95s" }}
                >
                    <Image
                        src="/nextjs-icon-svgrepo-com.svg"
                        alt="nextjs"
                        width={35}
                        height={35}
                    />
                    <span>NEXT.JS</span>
                </div>
                <hr className="text-gray-500 pointer-events-none w-8" />
                <div
                    className="flex items-center gap-2 tech-item"
                    style={{ animationDelay: "1.05s" }}
                >
                    <Image
                        src="/react-svgrepo-com.svg"
                        alt="react"
                        width={35}
                        height={35}
                    />
                    <span>REACT</span>
                </div>
                <hr className="text-gray-500 pointer-events-none w-8" />
                <div
                    className="flex items-center gap-2 tech-item"
                    style={{ animationDelay: "1.15s" }}
                >
                    <Image
                        src="/typescript-svgrepo-com.svg"
                        alt="typescript"
                        width={35}
                        height={35}
                    />
                    <span>TYPESCRIPT</span>
                </div>
                <hr className="text-gray-500 pointer-events-none w-8" />
                <div
                    className="flex items-center gap-2 tech-item"
                    style={{ animationDelay: "1.25s" }}
                >
                    <Image
                        src="/nodejs-icon-svgrepo-com.svg"
                        alt="nodejs"
                        width={35}
                        height={35}
                    />
                    <span>NODE.JS</span>
                </div>
                <hr className="text-gray-500 pointer-events-none w-8" />
                <div
                    className="flex items-center gap-2 tech-item"
                    style={{ animationDelay: "1.35s" }}
                >
                    <Image
                        src="/prisma-svgrepo-com.svg"
                        alt="prisma"
                        width={35}
                        height={35}
                    />
                    <span>PRISMA</span>
                </div>
                <hr className="text-gray-500 pointer-events-none w-8" />
                <div
                    className="flex items-center gap-2 tech-item"
                    style={{ animationDelay: "1.45s" }}
                >
                    <Image
                        src="/postgresql-logo-svgrepo-com.svg"
                        alt="postgresql"
                        width={35}
                        height={35}
                    />
                    <span>POSTGRESQL</span>
                </div>
            </div>
        </>
    );
}
