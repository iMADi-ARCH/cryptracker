"use client";
import { FC } from "react";
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    ReferenceArea,
    Brush,
} from "recharts";

interface ChartProps {
    timeSeries: { name: string; uv: number }[];
}

const Chart: FC<ChartProps> = ({ timeSeries }) => {
    return (
        <>
            <div className="w-full h-full flex">
                <ResponsiveContainer aspect={2.25} width="100%" height="100%">
                    <AreaChart
                        data={timeSeries}
                        // compact
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
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
                            startIndex={timeSeries.length - 200}
                        >
                            <rect className="fill-zinc-800" />
                        </Brush>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

interface ChartData {
    name: string;
    value: number;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: ChartData[];
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload) {
        // Render your custom tooltip
        // const { value, name } = payload[0];
        return (
            <div className="p-4 bg-zinc-700 outline-none border-none">
                <p className="text-lg">Price: $ {`${payload[0].value}`}</p>
                <p className="text-xs">On: {label}</p>
            </div>
        );
    }

    return null;
};

export default Chart;
