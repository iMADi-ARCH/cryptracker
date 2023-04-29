"use client";
import Spinner from "@/components/ui/Spinner";
import { FC } from "react";
import { MdLoop } from "react-icons/md";

interface LoadingProps {
    params: { currency: string };
}

const Loading: FC<LoadingProps> = ({ params }) => {
    return (
        // <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full aspect-video bg-zinc-700/50 rounded-md animate-pulse flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-1">
                    <span>Building Graph</span>
                    <MdLoop className="animate-spin -scale-100" />
                    {/* <Spinner /> */}
                </div>
            </div>
        </div>
    );
};

export default Loading;
