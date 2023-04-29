import { getDigitalCurrencyIconUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CurrencyCardProps {
    cur: { slug: string; name: string };
}

const CurrencyCard: FC<CurrencyCardProps> = ({ cur }) => {
    return (
        <Link
            href={`/${cur.slug}`}
            className=" group border overflow-hidden border-zinc-700 relative w-full max-w-xs p-10 flex flex-col items-center justify-center bg-gradient-to-tr from-zinc-900 to-zinc-900 rounded-md shadow-2xl "
        >
            <div className="flex items-center justify-center absolute inset-0 bg-zinc-50 bg-opacity-0 group-hover:bg-opacity-10 transition-colors z-10">
                {/* <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                    Show time series data
                </span> */}
            </div>
            <Image
                className="object-contain"
                src={getDigitalCurrencyIconUrl(cur.slug)}
                alt={cur.name}
                width={128}
                height={128}
            />
            <h1 className="text-2xl">{cur.name}</h1>
            <p>{cur.slug}</p>
        </Link>
    );
};

export default CurrencyCard;
