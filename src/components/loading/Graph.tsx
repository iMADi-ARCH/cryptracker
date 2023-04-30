"use client";
import { FC } from "react";
import { MdLoop } from "react-icons/md";
import { AreaChart, ResponsiveContainer } from "recharts";
import CustomAreaChart from "../ui/CustomAreaChart";

interface GraphLoadingProps {
    params: { currency: string };
}

const GraphLoading: FC<GraphLoadingProps> = ({ params }) => {
    // Standard Normal variate using Box-Muller transform.
    const getDummyData = (len: number) => {
        const result = [];
        for (let i = 0; i < len; i++) {
            result.push({ name: i, uv: 100 + Math.random() * 100 });
        }
        return result;
    };

    return (
        // <div className="w-full h-full flex flex-col gap-5">
        <div className="relative w-full rounded-md animate-pulse flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 z-10">
                <span>Drawing Graph...</span>
                <MdLoop className="animate-spin -scale-100" />
            </div>
            <CustomAreaChart
                className="opacity-50"
                tooltip={false}
                brush={false}
                data={getDummyData(25)}
            />
        </div>
        // </div>
    );
};

export default GraphLoading;
