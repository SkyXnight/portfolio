import Image from "next/image";
import Link from "next/link";
import { Syne } from "next/font/google";
import { SiGithub } from "react-icons/si";

const syne = Syne({ weight: "800" });

export default function Projects() {
    return (
        <div className="w-full px-25">
            <div className="mt-6">
                <h1
                    className={`text-4xl ${syne.className} mb-1`}
                    style={{
                        opacity: 0,
                        animation:
                            "slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                    }}
                >
                    Projects
                </h1>
                <span
                    className="text-amber-400 text-lg font-medium tracking-wide"
                    style={{
                        opacity: 0,
                        animation: "slideLeft 0.5s ease 0.2s forwards",
                    }}
                >
                    &#47;&#47; My Recent Works
                </span>
                <p
                    className="text-[#3d3d3d] tracking-wide w-[38%] mt-2"
                    style={{
                        opacity: 0,
                        animation: "slideLeft 0.5s ease 0.3s forwards",
                    }}
                >
                    A collection of projects that showcase my skills in frontend
                    and full-stack development.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
                <div
                    className="bg-transparent h-120"
                    style={{
                        opacity: 0,
                        animation:
                            "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.4s forwards",
                    }}
                >
                    <Image
                        src="/blackscreen.jpg"
                        alt="project1"
                        width={100}
                        height={100}
                        className="w-full h-[50%] rounded-lg"
                    />
                    <div className="px-1 flex flex-col">
                        <h1 className="text-xl font-semibold tracking-wide mt-3 mb-2">
                            SaaS Task Manager
                        </h1>
                        <span className="text-[#333333]">
                            Task managment platform with authentication and
                            database integration.
                        </span>
                        <span className="mt-6 font-semibold">Tech Stack</span>
                        <div className="mt-1 text-sm flex w-full gap-2 justify-center">
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>Prisma</span>
                            <span>PostgreSQL</span>
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="flex justify-start items-center gap-5 mt-6">
                            <Link
                                href="https://github.com/SkyXnight"
                                className="w-full flex justify-center text-white bg-black items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.7)]"
                            >
                                <SiGithub size={20} />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-transparent h-120"
                    style={{
                        opacity: 0,
                        animation:
                            "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.55s forwards",
                    }}
                >
                    <Image
                        src="/blackscreen.jpg"
                        alt="project2"
                        width={100}
                        height={100}
                        className="w-full h-[50%] rounded-lg"
                    />
                    <div className="px-1 flex flex-col">
                        <h1 className="text-xl font-semibold tracking-wide mt-3 mb-2">
                            Expense Tracker
                        </h1>
                        <span className="text-[#333333]">
                            Expense tracking platform with authentication,
                            budgeting, and analytics dashboard.
                        </span>
                        <span className="mt-6 font-semibold">Tech Stack</span>
                        <div className="mt-1 text-sm flex w-full gap-2 justify-center">
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>Prisma</span>
                            <span>PostgreSQL</span>
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="flex justify-start items-center gap-5 mt-6">
                            <Link
                                href="https://github.com/SkyXnight"
                                className="w-full flex justify-center text-white bg-black items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.7)]"
                            >
                                <SiGithub size={20} />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-transparent h-120"
                    style={{
                        opacity: 0,
                        animation:
                            "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.7s forwards",
                    }}
                >
                    <Image
                        src="/blackscreen.jpg"
                        alt="project3"
                        width={100}
                        height={100}
                        className="w-full h-[50%] rounded-lg"
                    />
                    <div className="px-1 flex flex-col">
                        <h1 className="text-xl font-semibold tracking-wide mt-3 mb-2">
                            E-Commerce Store
                        </h1>
                        <span className="text-[#333333]">
                            Full-stack online store with shopping cart and
                            payment integration.
                        </span>
                        <span className="mt-6 font-semibold">Tech Stack</span>
                        <div className="mt-1 text-sm flex w-full gap-3.5 justify-center">
                            <span>Next.js</span>
                            <span>Node.js</span>
                            <span>Prisma</span>
                            <span>PostgreSQL</span>
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="flex justify-start items-center gap-5 mt-6">
                            <Link
                                href="https://github.com/SkyXnight"
                                className="w-full flex justify-center text-white bg-black items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.7)]"
                            >
                                <SiGithub size={20} />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
