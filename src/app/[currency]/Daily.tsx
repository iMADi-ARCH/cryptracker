import { notFound } from "next/navigation";
import { getDaily } from "@/lib/utils";
import PriceTag from "@/components/ui/PriceTag";
import CustomAreaChart from "@/components/ui/CustomAreaChart";
import Loading from "./loading";
import LimitExceeded from "./LimitExceeded";
// import ErrorComponent from "./error";

interface DailyProps {
    params: { currency: string };
}

export const revalidate = 86400;

const Daily = async ({ params }: DailyProps) => {
    let { meta, timeSeriesFormatted, error } = await getDaily(params.currency);

    const dateRefreshed = new Date(meta?.lastRefreshed).toLocaleDateString();

    if (error) {
        notFound();
    }

    if (!timeSeriesFormatted || !dateRefreshed) {
        console.log("Limit Exceeded");
        return <LimitExceeded />;
    }

    return (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <div className="flex-1 flex flex-col gap-1">
                    <h2 className="text-3xl">Daily:</h2>
                    <p className="flex text-xs items-center gap-2">
                        Updated on:
                        <span className="text-green-500 font-bold">
                            {dateRefreshed}
                        </span>
                    </p>
                </div>
                <span>Today&rsquo;s Price:</span>
                <PriceTag
                    price={timeSeriesFormatted.at(-1).uv.toLocaleString()}
                />
            </div>
            <CustomAreaChart data={timeSeriesFormatted} slice={500} />
        </div>
    );
};

export default Daily;
