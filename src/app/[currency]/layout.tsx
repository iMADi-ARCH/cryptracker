import CurrencyCard from "@/components/ui/CurrencyCard";
import {
    getDigitalCurrencies,
    getDigitalCurrencyIconUrl,
    getDigitalCurrencyName,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import { notFound } from "next/navigation";
import { FC } from "react";
import { MdChevronLeft } from "react-icons/md";
import NotFound from "./not-found";

interface layoutProps {
    children: React.ReactNode;
    params: { currency: string };
}

const Layout = async ({ params, children }: layoutProps) => {
    const curName = await getDigitalCurrencyName(params.currency);
    if (!curName) {
        return <NotFound />;
    }
    const currs = await getDigitalCurrencies();
    return (
        <div className="w-full h-full flex flex-col gap-5">
            <Link href={"/"} className="absolute top-0 left-0 p-5 text-6xl">
                <MdChevronLeft />
            </Link>
            <div className="flex gap-3 my-3 items-center">
                <Image
                    src={getDigitalCurrencyIconUrl(params.currency)}
                    alt={curName}
                    className="w-auto h-auto object-contain"
                    width={48}
                    height={48}
                />
                <h1 className="text-center text-4xl">{curName}</h1>
            </div>
            {children}
            <h2 className="text-center text-3xl mt-10">Other Currencies</h2>
            <div className="flex flex-wrap gap-3 justify-center">
                {currs.map((cur) => (
                    <CurrencyCard key={cur.slug} cur={cur} />
                ))}
            </div>
        </div>
    );
};

export default Layout;
