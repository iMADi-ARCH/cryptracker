import { notFound } from "next/navigation";
import { getMonthly } from "@/lib/utils";
import PriceTag from "@/components/ui/PriceTag";
import Loading from "./loading";
import CustomBarChart from "@/components/ui/CustomBarChart";
import LimitExceeded from "../../components/ui/LimitExceeded";

interface MonthlyProps {
    params: { currency: string };
}

export const revalidate = 2592000;

const Monthly = async ({ params }: MonthlyProps) => {
    const { meta, timeSeriesFormatted, error } = await getMonthly(
        params.currency
    );

    const dateRefreshed = new Date(meta?.lastRefreshed).toLocaleDateString();
    const price = timeSeriesFormatted?.at(-1);

    if (error) {
        console.log(error);
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
                    <h3 className="text-2xl">Monthly:</h3>
                    <p className="flex text-xs items-center gap-2">
                        Updated on:
                        <span className="text-green-500 font-bold">
                            {dateRefreshed}
                        </span>
                    </p>
                </div>
                <span className="text-sm">This month&rsquo;s Price:</span>
                {price ? <PriceTag price={price.uv.toLocaleString()} /> : null}
            </div>
            <CustomBarChart data={timeSeriesFormatted} slice={20} />
        </div>
    );
};

export default Monthly;
