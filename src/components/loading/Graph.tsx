import { FC } from "react";
import { MdLoop } from "react-icons/md";

interface GraphLoadingProps {
    params: { currency: string };
}

const GraphLoading: FC<GraphLoadingProps> = ({ params }) => {
    return (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full aspect-video bg-zinc-700/50 rounded-md animate-pulse flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-1">
                    <span>Building Graph...</span>
                    <MdLoop className="animate-spin -scale-100" />
                </div>
            </div>
        </div>
    );
};

export default GraphLoading;
