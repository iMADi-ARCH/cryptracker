import CurrencyCard from "@/components/ui/CurrencyCard";
import {
    getDigitalCurrencies,
    getDigitalCurrencyIconUrl,
    getDigitalCurrencyName,
} from "@/lib/serverUtils";
import Image from "next/image";
import Link from "next/link";
import { MdChevronLeft, MdVisibility } from "react-icons/md";
import NotFound from "./not-found";
import Button from "@/components/ui/Button";

interface layoutProps {
    children: React.ReactNode;
    params: { currency: string };
}

export const revalidate = 600; // 10 minutes

const Layout = async ({ params, children }: layoutProps) => {
    const curName = await getDigitalCurrencyName(params.currency);
    if (!curName) {
        return <NotFound />;
    }
    const currs = await getDigitalCurrencies();
    return (
        <div className="w-full h-full flex flex-col gap-5 py-10">
            {/* <Link href={"/"} className="absolute top-0 left-0 p-5 text-6xl">
                <MdChevronLeft />
            </Link> */}
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
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
                {children}
            </div>
            <h2 className="text-center text-3xl mt-10">Other Currencies</h2>
            <div className="flex flex-wrap gap-3 justify-center">
                {currs.slice(0, 3).map((cur) => (
                    <CurrencyCard key={cur.slug} cur={cur} />
                ))}
            </div>
            <Link className="self-center" href={"/"}>
                <Button>
                    See All <MdVisibility />
                </Button>
            </Link>
        </div>
    );
};

export default Layout;
