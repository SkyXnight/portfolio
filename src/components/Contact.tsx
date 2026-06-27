"use client";
import { Send, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Syne } from "next/font/google";
import { useState } from "react";

const syne = Syne({ weight: "800", subsets: ["latin"] });

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

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
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });

        if (res.ok) {
            console.log("Message sent");
            setName("");
            setEmail("");
            setMessage("");
            setStatus("success");

            setTimeout(() => {
                setStatus(null);
            }, 3000);
        } else {
            setStatus("error");
            setTimeout(() => {
                setStatus(null);
            }, 3000);
        }
        setLoading(false);
    };

    return (
        <div className="w-full px-24 mt-10">
            <div className="flex gap-80">
                <div>
                    <div>
                        <h1
                            className={`text-5xl ${syne.className} mb-2`}
                            style={{
                                opacity: 0,
                                animation:
                                    "slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                            }}
                        >
                            Contact
                        </h1>
                        <span
                            className="text-[#5e5e5e] tracking-wide text-lg font-semibold"
                            style={{
                                opacity: 0,
                                animation: "slideLeft 0.5s ease 0.2s forwards",
                            }}
                        >
                            Lets&apos;s Build Something Great Together
                        </span>
                        <p
                            className="mt-2 text-[#5e5e5e] tracking-wide font-medium w-110"
                            style={{
                                opacity: 0,
                                animation: "slideLeft 0.5s ease 0.3s forwards",
                            }}
                        >
                            I&apos;m always open to discussing new projects,
                            creative ideas, or opportunities to be part of your
                            vision
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 mt-10 mb-20">
                        <div
                            className="flex gap-4 items-center"
                            style={{
                                opacity: 0,
                                animation: "slideLeft 0.4s ease 0.4s forwards",
                            }}
                        >
                            <Image
                                src="/email-svgrepo-com.svg"
                                alt="email"
                                width={30}
                                height={30}
                            />
                            <div>
                                <h1 className="font-semibold tracking-wide">
                                    Email
                                </h1>
                                <span className="text-[#5e5e5e] tracking-wide">
                                    skyxnight666@gmail.com
                                </span>
                            </div>
                        </div>
                        <div
                            className="flex gap-4  items-center"
                            style={{
                                opacity: 0,
                                animation: "slideLeft 0.4s ease 0.5s forwards",
                            }}
                        >
                            <SiTelegram size={30} />
                            <div>
                                <h1 className="font-semibold tracking-wide">
                                    Telegram
                                </h1>
                                <span className="text-[#5e5e5e] tracking-wide">
                                    @boropolop
                                </span>
                            </div>
                        </div>
                        <div
                            className="flex gap-4  items-center"
                            style={{
                                opacity: 0,
                                animation: "slideLeft 0.4s ease 0.6s forwards",
                            }}
                        >
                            <SiGithub size={30} />
                            <div>
                                <h1 className="font-semibold tracking-wide">
                                    GitHub
                                </h1>
                                <span className="text-[#5e5e5e] tracking-wide">
                                    github.com/SkyXnight
                                </span>
                            </div>
                        </div>
                        <div
                            className="flex gap-4  items-center"
                            style={{
                                opacity: 0,
                                animation: "slideLeft 0.4s ease 0.7s forwards",
                            }}
                        >
                            <FaLinkedin size={30} />
                            <div>
                                <h1 className="font-semibold tracking-wide">
                                    LinkedIn
                                </h1>
                                <span className="text-[#5e5e5e] tracking-wide">
                                    linkedin.com/in/diax-night
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col"
                        style={{
                            opacity: 0,
                            animation: "fadeUp 0.5s ease 0.8s forwards",
                        }}
                    >
                        <div className="flex gap-4 items-center mb-2">
                            <Send size={30} />
                            <div>
                                <h1 className="font-semibold tracking-wide text-lg mb-">
                                    Ready to start a project?
                                </h1>
                                <span className="text-[#5e5e5e] tracking-wide">
                                    Let&apos;s create something amazing
                                    together.
                                </span>
                            </div>
                        </div>
                        <Link
                            href="https://t.me/boropolop"
                            target="_blank"
                            className="ml-10 bg-black text-white w-40 px-3 py-2 rounded-2xl flex items-center gap-2 justify-center text-lg tracking-wider font-medium transition-all duration-200 hover:bg-[#212121]"
                        >
                            Hire me <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
                <div className="w-full">
                    <form
                        onSubmit={send}
                        className="flex flex-col gap-4"
                        style={{
                            opacity: 0,
                            animation:
                                "slideRight 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s forwards",
                        }}
                    >
                        <h1 className="text-2xl font-semibold mb-10">
                            Send Me a Message
                        </h1>
                        <label htmlFor="name" className="font-semibold">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="px-3 py-2"
                        />
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            className="px-3 py-2"
                        />
                        <label htmlFor="message" className="font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message..."
                            className="px-3 py-2 w-full min-h-40"
                        ></textarea>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white flex justify-center items-center py-3 rounded-2xl gap-4 tracking-wider transition-all duration-200 hover:bg-[#363636] cursor-pointer"
                        >
                            Send Message <Send />
                        </button>

                        {status === "success" && (
                            <p className="text-green-500">
                                Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500">
                                Failed to send message. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
            <div className="flex w-full justify-between items-center mt-35">
                <div></div>
                <span className="text-[#878787] tracking-wide ml-20">
                    &copy; 2026 Diax. All rights reserved.
                </span>
                <div className="flex gap-2">
                    <Link href="https://github.com/SkyXnight" target="_blank">
                        <SiGithub size={30} />
                    </Link>
                    <Link href="https://t.me/boropolop" target="_blank">
                        <SiTelegram size={30} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/diax-night"
                        target="_blank"
                    >
                        <FaLinkedin size={30} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
