import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
    return (
        <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
            <h1 className="text-9xl font-thin">404</h1>
            <hr className="max-w-xs w-full" />
            <p>Currency does not exist.</p>
        </div>
    );
};

export default NotFound;
