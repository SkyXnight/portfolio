import Image from "next/image";
import {
    MapPin,
    BriefcaseBusiness,
    GraduationCap,
    Globe,
    Wrench,
} from "lucide-react";
import { Syne, Inter } from "next/font/google";
import Link from "next/link";

const syne = Syne({ weight: "800", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const syne_400 = Syne({ weight: "700", subsets: ["latin"] });

export default function About() {
    return (
        <>
            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 p-6 lg:p-10">
                <Image
                    src="/avatar.jpg"
                    alt="avatar"
                    width={450}
                    height={450}
                    className="w-[250px] sm:w-[320px] lg:w-[450px] h-auto rounded-full"
                    style={{
                        opacity: 0,
                        animation:
                            "slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                    }}
                />

                {/* TEXT */}
                <div className="flex flex-col items-center text-center lg:px-10">
                    <span
                        className="tracking-wide text-green-500 text-sm sm:text-base"
                        style={{
                            opacity: 0,
                            animation: "fadeUp 0.5s ease 0.2s forwards",
                        }}
                    >
                        &#47;&#47; ABOUT ME
                    </span>

                    <h1
                        className={`text-3xl sm:text-5xl lg:text-6xl ${syne.className}`}
                        style={{
                            opacity: 0,
                            animation:
                                "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
                        }}
                    >
                        About Me
                    </h1>

                    <div
                        className={`flex flex-col items-center gap-5 mt-5 mb-4 text-[#5e5e5e] text-sm sm:text-base lg:text-lg max-w-xl ${inter.className}`}
                    >
                        <p
                            style={{
                                opacity: 0,
                                animation: "fadeUp 0.5s ease 0.4s forwards",
                            }}
                        >
                            I’m a Full-Stack developer focused on building fast,
                            scalable and modern web applications.
                        </p>

                        <p
                            style={{
                                opacity: 0,
                                animation: "fadeUp 0.5s ease 0.5s forwards",
                            }}
                        >
                            I build web apps, SaaS platforms and UI-heavy
                            interfaces.
                        </p>

                        <p
                            style={{
                                opacity: 0,
                                animation: "fadeUp 0.5s ease 0.6s forwards",
                            }}
                        >
                            I’m constantly learning new technologies and
                            improving my workflow.
                        </p>
                    </div>

                    <Link
                        href="/skills"
                        className="flex gap-2 items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-[#363636] transition"
                        style={{
                            opacity: 0,
                            animation: "fadeUp 0.5s ease 0.7s forwards",
                        }}
                    >
                        <Wrench size={20} />
                        View my skills
                    </Link>
                </div>
            </div>

            {/* CARDS SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-7 mt-10 px-6 lg:px-10">
                <div className="flex flex-col items-center p-5 border rounded-2xl hover:bg-[#d1d1d1] transition">
                    <MapPin size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Location
                    </h1>
                    <span className="text-[#5e5e5e] text-center font-bold">
                        Ukraine
                    </span>
                </div>

                <div className="flex flex-col items-center p-5 border rounded-2xl hover:bg-[#d1d1d1] transition">
                    <BriefcaseBusiness size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Experience
                    </h1>
                    <span className="text-[#5e5e5e] text-center font-bold">
                        Personal projects & open source
                    </span>
                </div>

                <div className="flex flex-col items-center p-5 border rounded-2xl hover:bg-[#d1d1d1] transition">
                    <GraduationCap size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Education
                    </h1>
                    <span className="text-[#5e5e5e] text-center font-bold">
                        Self-taught developer
                    </span>
                </div>

                <div className="flex flex-col items-center p-5 border  rounded-2xl hover:bg-[#d1d1d1] transition">
                    <Globe size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Languages
                    </h1>
                    <span className="text-[#5e5e5e] text-center font-bold">
                        UA / EN / RU
                    </span>
                </div>
            </div>
        </>
    );
}
