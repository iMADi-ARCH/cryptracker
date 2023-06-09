import { Suspense } from "react";
import Daily from "./Daily";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
import GraphLoading from "@/components/loading/Graph";

interface PageProps {
    params: { currency: string };
}

const Page = async ({ params }: PageProps) => {
    return (
        <>
            <div className="md:col-span-2">
                <Suspense fallback={<GraphLoading params={params} />}>
                    {/* @ts-expect-error Idk */}
                    <Daily params={params} />
                </Suspense>
                {/* <GraphLoading params={params} /> */}
            </div>
            <Suspense fallback={<GraphLoading params={params} />}>
                {/* @ts-expect-error Idk */}
                <Weekly params={params} />
            </Suspense>
            {/* <GraphLoading params={params} /> */}
            <Suspense fallback={<GraphLoading params={params} />}>
                {/* @ts-expect-error Idk */}
                <Monthly params={params} />
            </Suspense>
            {/* <GraphLoading params={params} /> */}
        </>
    );
};

export default Page;
