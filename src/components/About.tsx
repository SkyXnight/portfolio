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
            <div className="flex p-10">
                <Image
                    src="/avatar.jpg"
                    alt="avatar"
                    width={450}
                    height={450}
                    className="rounded-full"
                    style={{
                        opacity: 0,
                        animation:
                            "slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                    }}
                />
                <div className="py-10 px-30 flex flex-col items-center ">
                    <span
                        className="tracking-wide text-green-500"
                        style={{
                            opacity: 0,
                            animation: "fadeUp 0.5s ease 0.2s forwards",
                        }}
                    >
                        &#47;&#47; ABOUT ME
                    </span>
                    <h1
                        className={`text-6xl ${syne.className}`}
                        style={{
                            opacity: 0,
                            animation:
                                "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
                        }}
                    >
                        About Me
                    </h1>
                    <div
                        className={`flex flex-col items-center gap-5 mt-5 mb-4 text-center text-[#5e5e5e] text-lg/1.6 ${inter.className}`}
                    >
                        <p
                            style={{
                                opacity: 0,
                                animation: "fadeUp 0.5s ease 0.4s forwards",
                            }}
                        >
                            I’m a Full-Stack developer focused on building fast,
                            scalable and modern web applications. I enjoy
                            turning complex problems into simple and elegant
                            solutions.
                        </p>
                        <p
                            style={{
                                opacity: 0,
                                animation: "fadeUp 0.5s ease 0.5s forwards",
                            }}
                        >
                            I build web apps, SaaS platforms and UI-heavy
                            interfaces. My focus is performance, clean
                            architecture and user experience.
                        </p>
                        <p
                            style={{
                                opacity: 0,
                                animation: "fadeUp 0.5s ease 0.6s forwards",
                            }}
                        >
                            I’m constantly learning new technologies and
                            improving my development workflow. I enjoy building
                            side projects and turning ideas into real products.
                        </p>
                    </div>
                    <Link
                        href="/skills"
                        className="flex gap-2 items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-[#363636] transition-all duration-200 will-change-transform hover:-translate-y-0.5"
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
            <div className="flex justify-around items-center mt-10 gap-10 h-50">
                <div
                    className=" w-70 h-40 flex flex-col items-center p-5 border rounded-2xl hover:bg-[#d1d1d1] cursor-pointer transition-all duration-200 will-change-transform hover:-translate-y-1"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 0.8s forwards",
                    }}
                >
                    <MapPin size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Location
                    </h1>
                    <span
                        className={`text-[#5e5e5e] text-lg/1.6 font-bold text-center`}
                    >
                        Ukraine
                    </span>
                </div>
                <div
                    className=" w-70 h-40 flex flex-col items-center p-5 border rounded-2xl hover:bg-[#d1d1d1] cursor-pointer transition-all duration-200 will-change-transform hover:-translate-y-1"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 0.9s forwards",
                    }}
                >
                    <BriefcaseBusiness size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Experience
                    </h1>
                    <span
                        className={`text-[#5e5e5e] text-lg/1.6 font-bold text-center`}
                    >
                        Building personal projects and open source
                    </span>
                </div>
                <div
                    className=" w-70 h-40 flex flex-col items-center p-5 border rounded-2xl hover:bg-[#d1d1d1] cursor-pointer transition-all duration-200 will-change-transform hover:-translate-y-1"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 1.0s forwards",
                    }}
                >
                    <GraduationCap size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Education
                    </h1>
                    <span
                        className={`text-[#5e5e5e] text-lg/1.6 font-bold text-center`}
                    >
                        Self-taught developer <br />
                        Constantly learning
                    </span>
                </div>
                <div
                    className=" w-70 h-40 flex flex-col items-center p-5 border rounded-2xl hover:bg-[#d1d1d1] cursor-pointer transition-all duration-200 will-change-transform hover:-translate-y-1"
                    style={{
                        opacity: 0,
                        animation: "fadeUp 0.5s ease 1.1s forwards",
                    }}
                >
                    <Globe size={27} />
                    <h1 className={`text-lg ${syne_400.className} mb-1`}>
                        Languages
                    </h1>
                    <span
                        className={`text-[#5e5e5e] text-lg/1.6 font-bold text-center`}
                    >
                        Ukrainian, English, Russian
                    </span>
                </div>
            </div>
        </>
    );
}
