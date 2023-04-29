"use client";
import { FC } from "react";
import {
    ResponsiveContainer,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Brush,
    AreaChart,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";

interface AreaChartProps extends CategoricalChartProps {
    slice?: number;
    aspect?: number;
}

const CustomAreaChart: FC<AreaChartProps> = ({
    data,
    slice = 100,
    aspect = 2.25,
    ...props
}) => {
    if (!data) return null;

    return (
        <div className="w-full h-full flex">
            <ResponsiveContainer aspect={aspect} width="100%" height="100%">
                <AreaChart
                    data={data}
                    // margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
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

                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <CartesianGrid
                        className="stroke-zinc-700"
                        strokeDasharray="5 5"
                    />
                    <XAxis dataKey="name" />
                    <YAxis className="pr-10" />
                    <Tooltip content={<CustomTooltip />} />
                    <Brush
                        className="fill-zinc-800"
                        dataKey={"name"}
                        // x={0}
                        // y={0}
                        // width={100}
                        // startIndex={data.length - slice}
                        startIndex={Math.max(data.length - slice, 0)}
                    >
                        <rect className="fill-zinc-800" />
                    </Brush>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomAreaChart;
