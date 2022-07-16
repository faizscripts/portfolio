import {useState, useEffect} from "react";

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(null);

    useEffect(() => {
        function getWindowDimensions() {
            const { innerWidth: width, innerHeight: height } = window;
            return {
                width,
                height
            };
        }

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('load', handleResize);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return [windowDimensions]
}

export default useWindowDimensions