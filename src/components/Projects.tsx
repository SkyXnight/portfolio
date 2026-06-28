import Image from "next/image";
import Link from "next/link";
import { Syne } from "next/font/google";
import { SiGithub } from "react-icons/si";

const syne = Syne({ weight: "800", subsets: ["latin"] });

export default function Projects() {
    return (
        <div className="w-full px-5 sm:px-10 lg:px-20 xl:px-25">
            {/* HEADER */}
            <div className="mt-6">
                <h1
                    className={`text-3xl sm:text-4xl ${syne.className} mb-1`}
                    style={{
                        opacity: 0,
                        animation:
                            "slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                    }}
                >
                    Projects
                </h1>

                <span
                    className="text-amber-400 text-base sm:text-lg font-medium tracking-wide"
                    style={{
                        opacity: 0,
                        animation: "slideLeft 0.5s ease 0.2s forwards",
                    }}
                >
                    &#47;&#47; My Recent Works
                </span>

                <p
                    className="text-[#3d3d3d] tracking-wide mt-2 max-w-md lg:max-w-xl"
                    style={{
                        opacity: 0,
                        animation: "slideLeft 0.5s ease 0.3s forwards",
                    }}
                >
                    A collection of projects that showcase my skills in frontend
                    and full-stack development.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {[
                    {
                        title: "SaaS Task Manager (in development)",
                        desc: "Task management platform with authentication and database integration.",
                        stack: [
                            "Next.js",
                            "TypeScript",
                            "Prisma",
                            "PostgreSQL",
                            "Tailwind",
                        ],
                        delay: "0.4s",
                    },
                    {
                        title: "Expense Tracker (in development)",
                        desc: "Budgeting platform with analytics and authentication.",
                        stack: [
                            "Next.js",
                            "TypeScript",
                            "Prisma",
                            "PostgreSQL",
                        ],
                        delay: "0.55s",
                    },
                    {
                        title: "E-Commerce Store (in development)",
                        desc: "Full-stack store with cart and payment integration.",
                        stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
                        delay: "0.7s",
                    },
                ].map((project, i) => (
                    <div
                        key={i}
                        className="flex flex-col bg-transparent border border-transparent hover:border-black rounded-lg overflow-hidden transition-all duration-200"
                        style={{
                            opacity: 0,
                            animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${project.delay} forwards`,
                        }}
                    >
                        <Image
                            src="/blackscreen.jpg"
                            alt="project"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4 flex flex-col flex-1">
                            <h1 className="text-lg sm:text-xl font-semibold tracking-wide mb-2">
                                {project.title}
                            </h1>

                            <span className="text-[#333] text-sm sm:text-base">
                                {project.desc}
                            </span>

                            <span className="mt-4 font-semibold">
                                Tech Stack
                            </span>

                            <div className="mt-2 flex flex-wrap gap-2 text-sm text-center justify-start">
                                {project.stack.map((t, i) => (
                                    <span key={i} className="text-[#555]">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-6">
                                <Link
                                    href="https://github.com/SkyXnight"
                                    className="w-full flex justify-center items-center gap-2 bg-black text-white rounded-lg px-3 py-2 hover:shadow-[0px_0px_5px_rgba(0,0,0,0.7)] transition"
                                >
                                    <SiGithub size={20} />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
