"use client";
import { FC } from "react";
import {
    ResponsiveContainer,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Brush,
    BarChart,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";

interface BarChartProps extends CategoricalChartProps {
    // data: { name: string; uv: number }[];
    slice?: number;
}

const CustomBarChart: FC<BarChartProps> = ({ data, slice = 100, ...props }) => {
    if (!data) {
        return null;
    }

    return (
        <div className="w-full h-full flex">
            <ResponsiveContainer aspect={1.5} width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    {...props}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <Bar
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        strokeOpacity={0.5}
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <CartesianGrid
                        className="stroke-zinc-700"
                        strokeDasharray="5 5"
                    />
                    <XAxis dataKey="name" />
                    <YAxis label={"USD"} className="pr-10" />
                    <Tooltip content={<CustomTooltip />} />
                    <Brush
                        className="fill-zinc-800"
                        dataKey={"name"}
                        // x={0}
                        // y={0}
                        // width={100}
                        startIndex={Math.max(data.length - slice, 0)}
                    >
                        <rect className="fill-zinc-800" />
                    </Brush>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;
