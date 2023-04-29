import { useCallback, useEffect, useMemo, useState, UIEvent } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState({ width: 0, height: 0 });

    const handleResize = useCallback((e: Event) => {
        const target = e.currentTarget as Window;
        setSize({ width: target.innerWidth, height: target.innerHeight });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
};

export default useWindowSize;
