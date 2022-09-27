import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetching = <RequestBody, Response>(
    callback: (userData?: RequestBody) => Promise<Response>,
    isLoadOnMount: boolean = true
) => {
    const [data, setData] = useState<Response | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [requestError, setRequestError] = useState<any | null>(null);

    const makeRequest = async (requestBody?: RequestBody): Promise<void> => {
        setLoading(true);
        try {
            await new Promise((resolve) => {
                setTimeout(resolve, 3000);
            });
            const response = await callback(requestBody);
            setRequestError(null);
            setData(response);
        } catch (error) {
            setData(null);
            if (axios.isAxiosError(error)) {
                setRequestError(error.response?.data);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isLoadOnMount) {
            makeRequest();
        }
    }, []);

    return { data, isLoading, requestError, makeRequest };
};
