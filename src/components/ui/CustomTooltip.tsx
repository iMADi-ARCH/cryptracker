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
            <div className="py-4 px-5 bg-gradient-to-tr from-zinc-800/25 to-zinc-700/25 backdrop-blur-xl outline-none rounded-md border-zinc-500 border-none">
                <p className="text-lg flex gap-2 items-center">
                    Price:
                    <span className="text-green-500">
                        $ {`${payload[0].value.toLocaleString()}`}
                    </span>
                </p>
                <p className="text-lg flex gap-2 items-center">
                    On:
                    <span className="text-green-500">{label}</span>
                </p>
            </div>
        );
    }

    return null;
};
export default CustomTooltip;
