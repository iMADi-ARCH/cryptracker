import Socials from "@/components/ui/Socials";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaBitcoin, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const title = "Cryptracker — Track Digital Currency prices easily";
const description =
    "Looking to easily track digital currency prices? Check out Cryptracker! Our web app displays daily, weekly, and monthly prices for a variety of digital currencies including Bitcoin and Ethereum. Stay up-to-date and informed with Cryptracker.";
const url = "https://cryptracker-dun.vercel.app/";
const images = [
    {
        url: "/og-image.jpg",
        width: 1200,
        height: 628,
    },
];

export const metadata = {
    title: title,
    description: description,
    generator: "Next.js",
    applicationName: "Cryptracker",
    referrer: "origin-when-cross-origin",
    keywords: ["Next.js", "React", "JavaScript", "Crypto", "Digital Currency"],
    authors: [{ name: "Aditya Nandan" }],
    colorScheme: "dark",
    creator: "Aditya Nandan",
    publisher: "Aditya Nandan",
    category: "technology",
    openGraph: {
        type: "website",
        url: url,
        title: title,
        description: description,
        images: images,
    },
    twitter: {
        card: "summary_large_image",
        site: url,
        title: title,
        description: description,
        images: images,
        creator: "@iMADi",
        creatorId: "69235681",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className="dark scroll-smooth w-full h-fit min-h-screen bg-gradient-to-tr to-zinc-800 from-zinc-900 text-zinc-50 overflow-x-hidden bg-cover"
            lang="en"
        >
            <body className={`w-full h-full ${inter.className}`}>
                <main className="w-full h-full relative max-w-7xl mx-auto p-5 flex flex-col items-center">
                    <div className="w-full flex flex-col gap-5 mb-5">
                        <div className="w-full flex items-center">
                            <h1 className="flex gap-5 flex-1 text-6xl font-bold">
                                <FaBitcoin />
                                Cryptracker
                            </h1>
                            <Socials
                                socials={[
                                    {
                                        name: "Linkedin",
                                        href: "https://www.linkedin.com/in/aditya-nandan-thats-it/",
                                        icon: <FaLinkedin />,
                                    },
                                    {
                                        name: "Twitter",
                                        href: "https://twitter.com/iMADi69235681",
                                        icon: <FaTwitter />,
                                    },
                                    {
                                        name: "Github",
                                        href: "https://github.com/iMADi-ARCH/cryptracker",
                                        icon: <FaGithub />,
                                    },
                                ]}
                            />
                            {/* <Link
                                href={
                                    "https://github.com/iMADi-ARCH/cryptracker"
                                }
                                className=""
                            >
                                <FaGithub className="text-5xl" />
                            </Link> */}
                        </div>
                        <hr className="w-full border-zinc-700" />
                    </div>
                    {children}
                </main>
            </body>
        </html>
    );
}
