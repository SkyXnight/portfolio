"use client";

import { Send, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Syne } from "next/font/google";
import { useState } from "react";
import { IconType } from "react-icons";

type ContactItem =
    | {
          type: "image";
          src: string;
          title: string;
          value: string;
      }
    | {
          type: "icon";
          Icon: IconType;
          title: string;
          value: string;
      };

const syne = Syne({ weight: "800", subsets: ["latin"] });

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

    const contacts: ContactItem[] = [
        {
            type: "image",
            src: "/email-svgrepo-com.svg",
            title: "Email",
            value: "skyxnight666@gmail.com",
        },
        {
            type: "icon",
            Icon: SiTelegram,
            title: "Telegram",
            value: "@boropolop",
        },
        {
            type: "icon",
            Icon: SiGithub,
            title: "GitHub",
            value: "github.com/SkyXnight",
        },
        {
            type: "icon",
            Icon: FaLinkedin,
            title: "LinkedIn",
            value: "linkedin.com/in/diax-night",
        },
    ];

    const send = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setStatus(null);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const res = await fetch("https://formspree.io/f/mqeolnwo", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: formData,
        });

        if (res.ok) {
            setName("");
            setEmail("");
            setMessage("");
            setStatus("success");

            setTimeout(() => setStatus(null), 3000);
        } else {
            setStatus("error");
            setTimeout(() => setStatus(null), 3000);
        }

        setLoading(false);
    };

    return (
        <div className="w-full px-5 sm:px-10 lg:px-20 mt-10">
            {/* MAIN GRID */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* LEFT */}
                <div className="w-full lg:w-1/2">
                    <h1
                        className={`text-4xl sm:text-5xl ${syne.className} mb-2`}
                        style={{
                            opacity: 0,
                            animation:
                                "slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                        }}
                    >
                        Contact
                    </h1>

                    <span
                        className="text-[#5e5e5e] tracking-wide text-base sm:text-lg font-semibold"
                        style={{
                            opacity: 0,
                            animation: "slideLeft 0.5s ease 0.2s forwards",
                        }}
                    >
                        Let&apos;s Build Something Great Together
                    </span>

                    <p
                        className="mt-3 text-[#5e5e5e] tracking-wide max-w-md"
                        style={{
                            opacity: 0,
                            animation: "slideLeft 0.5s ease 0.3s forwards",
                        }}
                    >
                        I&apos;m always open to discussing new projects, ideas,
                        or opportunities to work together.
                    </p>

                    {/* CONTACT INFO */}
                    <div className="flex flex-col gap-5 mt-10 mb-10">
                        {contacts.map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-4 items-center"
                                style={{
                                    opacity: 0,
                                    animation: `slideLeft 0.4s ease ${0.4 + i * 0.1}s forwards`,
                                }}
                            >
                                {item.type === "image" ? (
                                    <Image
                                        src={item.src}
                                        alt="icon"
                                        width={30}
                                        height={30}
                                    />
                                ) : (
                                    <item.Icon size={30} />
                                )}

                                <div>
                                    <h1 className="font-semibold tracking-wide">
                                        {item.title}
                                    </h1>
                                    <span className="text-[#5e5e5e]">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div
                        style={{
                            opacity: 0,
                            animation: "fadeUp 0.5s ease 0.8s forwards",
                        }}
                    >
                        <div className="flex gap-4 items-center">
                            <Send size={28} />
                            <div>
                                <h1 className="font-semibold text-lg">
                                    Ready to start a project?
                                </h1>
                                <span className="text-[#5e5e5e]">
                                    Let&apos;s build something amazing.
                                </span>
                            </div>
                        </div>

                        <Link
                            href="https://t.me/boropolop"
                            target="_blank"
                            className="mt-4 inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-[#222]"
                        >
                            Hire me <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* RIGHT - FORM */}
                <div className="w-full lg:w-1/2">
                    <form
                        onSubmit={send}
                        className="flex flex-col gap-4"
                        style={{
                            opacity: 0,
                            animation:
                                "slideRight 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s forwards",
                        }}
                    >
                        <h1 className="text-2xl font-semibold mb-6">
                            Send Me a Message
                        </h1>

                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="px-3 py-2 border rounded-lg"
                        />

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            className="px-3 py-2 border rounded-lg"
                        />

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message..."
                            className="px-3 py-2 border rounded-lg min-h-40"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-black text-white py-3 rounded-xl flex justify-center items-center gap-3 hover:bg-[#333]"
                        >
                            Send Message <Send size={18} />
                        </button>

                        {status === "success" && (
                            <p className="text-green-500">
                                Message sent successfully!
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-red-500">
                                Failed to send message.
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-7 mt-20 text-center md:text-left">
                <span className="text-[#878787]">
                    © 2026 Diax. All rights reserved.
                </span>

                <div className="flex gap-3">
                    <Link href="https://github.com/SkyXnight" target="_blank">
                        <SiGithub size={25} />
                    </Link>
                    <Link href="https://t.me/boropolop" target="_blank">
                        <SiTelegram size={25} />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <FaLinkedin size={25} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
