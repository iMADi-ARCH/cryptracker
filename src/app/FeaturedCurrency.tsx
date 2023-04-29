import { FC, Suspense } from "react";
import Loading from "./[currency]/loading";
import Daily from "./[currency]/Daily";
import Image from "next/image";
import { getDigitalCurrencyIconUrl } from "@/lib/utils";

interface FeaturedCurrencyProps {
    currency: string;
    name: string;
}

const FeaturedCurrency: FC<FeaturedCurrencyProps> = ({ currency, name }) => {
    return (
        <div>
            <div className="flex gap-3 my-3 items-center">
                <Image
                    src={getDigitalCurrencyIconUrl(currency)}
                    alt={name}
                    className="w-auto h-auto object-contain"
                    width={48}
                    height={48}
                />
                <h1 className="text-center text-4xl">Trending: {name}</h1>
            </div>
            <Suspense fallback={<Loading params={{ currency: "btc" }} />}>
                {/* @ts-expect-error Idk */}
                <Daily params={{ currency: "btc" }} />
            </Suspense>
        </div>
    );
};

export default FeaturedCurrency;
