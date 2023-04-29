import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Cryptracker",
    description: "A price tracker for digital currencies.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className="scroll-smooth w-full h-fit bg-gradient-to-tr to-zinc-800 from-zinc-900 text-zinc-50 overflow-x-hidden bg-cover"
            lang="en"
        >
            <body className={`w-full h-full ${inter.className}`}>
                <main className="w-full h-full relative max-w-5xl mx-auto p-5 flex flex-col items-center">
                    <div className="w-full flex flex-col gap-5 mb-5">
                        <h1 className="relative text-6xl text-center font-thin">
                            Cryptracker
                        </h1>
                        <hr className="w-full border-zinc-700" />
                    </div>
                    {children}
                </main>
            </body>
        </html>
    );
}
