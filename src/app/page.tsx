import { getDigitalCurrencies } from "@/lib/serverUtils";
import CurrencyCard from "@/components/ui/CurrencyCard";
import FeaturedCurrency from "./FeaturedCurrency";

export default async function Home() {
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
