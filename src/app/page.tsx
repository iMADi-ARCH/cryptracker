import Image from "next/image";
import alphaVantage from "@/lib/alphaVantage";
import { getDigitalCurrencies } from "@/lib/utils";
import Link from "next/link";
import CurrencyCard from "@/components/ui/CurrencyCard";

export default async function Home() {
    // const dat = await alphaVantage.crypto.daily("BTC", "USD");
    // console.log(dat);
    const currs = await getDigitalCurrencies();

    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {currs.map((cur) => (
                <CurrencyCard key={cur.slug} cur={cur} />
            ))}
        </div>
    );
}
