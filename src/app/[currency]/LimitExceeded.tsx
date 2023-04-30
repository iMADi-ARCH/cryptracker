"use client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { MdRefresh } from "react-icons/md";

interface LimitExceededProps {}

const LimitExceeded: FC<LimitExceededProps> = ({}) => {
    const router = useRouter();
    return (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full aspect-video bg-zinc-700/50 rounded-md flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-1">
                    <span>Rate Limit Exceeded</span>
                    <Button
                        onClick={() => {
                            router.refresh();
                        }}
                    >
                        Retry <MdRefresh />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LimitExceeded;
