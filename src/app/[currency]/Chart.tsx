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
    return <></>;
};

export default Chart;
