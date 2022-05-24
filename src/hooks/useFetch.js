import { useState, useEffect } from "react";

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const doFetch = async () => {
            // If user navigates away or starts a new connection we can abort to make sure
            // there is no stale/wrong data
            const abortController = new AbortController();
            const signal = abortController.signal;
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                if (!signal.aborted) {
                    setResponse(json);
                }
            } catch (e) {
                if (!signal.aborted) {
                    setError(e);
                    console.error(e);
                }
            } finally {
                if (!signal.aborted) {
                    setIsLoading(false);
                }
            }
        };
        doFetch();
        return () => {
            abortController.abort();
        };
    }, []);

    return { response, error, isLoading };
};
