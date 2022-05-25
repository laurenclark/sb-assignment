import { useState, useEffect } from "react";

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const doFetch = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (e) {
                setError(e);
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };
        doFetch();
    }, []);

    return { response, error, isLoading };
};

export default useFetch;
