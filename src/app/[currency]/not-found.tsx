import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
    return (
        <div className="w-full h-full flex flex-col gap-3 justify-center items-center min-h-[60vh]">
            <h1 className="text-9xl font-thin">404</h1>
            <hr className="max-w-xs w-full" />
            <p>Currency not supported.</p>
        </div>
    );
};

export default NotFound;
