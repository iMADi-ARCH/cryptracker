import { FC } from "react";

interface PriceTagProps {
    price: number | string;
}

const PriceTag: FC<PriceTagProps> = ({ price }) => {
    return (
        <span className="px-5 py-2 border border-green-500 bg-gradient-to-tr from-green-700 to-green-500 rounded-md w-fit">
            $ {price}
        </span>
    );
};

export default PriceTag;
