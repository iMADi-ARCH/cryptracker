import alphaVantage from "@/lib/alphaVantage";
import { FC, Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import { cache } from "react";
import {
    getData,
    getDigitalCurrencies,
    getDigitalCurrencyIconUrl,
    getDigitalCurrencyName,
    getTimeSeries,
} from "@/lib/utils";
// import Chart from "./Chart";

import dynamic from "next/dynamic";
import Image from "next/image";
import Loading from "./loading";

const Chart = dynamic(() => import("./Chart"), { ssr: false });

interface PageProps {
    params: { currency: string };
}

export const revalidate = 360;

const Page = async ({ params }: PageProps) => {
    const { timeSeriesFormatted, error } = await getTimeSeries(params.currency);
    if (error) {
        console.log(error);
        notFound();
    }

    const curName = await getDigitalCurrencyName(params.currency);

    return (
        <div className="w-full h-full flex flex-col gap-5">
            <Suspense fallback={"Loading chart..."}>
                <h2 className="text-3xl">Time Series</h2>
                <Chart timeSeries={timeSeriesFormatted} />
            </Suspense>
        </div>
    );
};

export default Page;
