import { getDigitalCurrencies } from "@/lib/utils";
import CurrencyCard from "@/components/ui/CurrencyCard";
import Daily from "./[currency]/Daily";
import { Suspense } from "react";
import Loading from "./[currency]/loading";
import FeaturedCurrency from "./FeaturedCurrency";

export default async function Home() {
    // const dat = await alphaVantage.crypto.daily("BTC", "USD");
    // console.log(dat);
    const currs = await getDigitalCurrencies();

    return (
        <div className="w-full flex flex-col gap-5">
            <FeaturedCurrency currency="btc" name="Bitcoin" />
            <div className="flex flex-wrap gap-3 justify-center">
                {currs.map((cur) => (
                    <CurrencyCard key={cur.slug} cur={cur} />
                ))}
            </div>
        </div>
    );
}
