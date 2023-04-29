import { Suspense } from "react";
import Daily from "./Daily";
import Loading from "./loading";
import Monthly from "./Monthly";
import Weekly from "./Weekly";

interface PageProps {
    params: { currency: string };
}

const Page = async ({ params }: PageProps) => {
    return (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
                <Suspense fallback={<Loading params={params} />}>
                    {/* @ts-expect-error Idk */}
                    <Daily params={params} />
                </Suspense>
            </div>
            <Suspense fallback={<Loading params={params} />}>
                {/* @ts-expect-error Idk */}
                <Weekly params={params} />
            </Suspense>
            <Suspense fallback={<Loading params={params} />}>
                {/* @ts-expect-error Idk */}
                <Monthly params={params} />
            </Suspense>
        </div>
    );
};

export default Page;
