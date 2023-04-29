"use client"; // Error components must be Client components

import Button from "@/components/ui/Button";
import { FC, useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const ErrorComponent: FC<ErrorProps> = ({ error, reset }) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <>
            <div className="w-full h-full flex flex-col gap-5">
                <div className="w-full aspect-video bg-zinc-700/50 rounded-md animate-pulse flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <h2>Something Went wrong.</h2>
                        <Button
                            onClick={
                                // Attempt to recover by trying to re-render the segment

                                () => reset()
                            }
                        >
                            Try again
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ErrorComponent;
