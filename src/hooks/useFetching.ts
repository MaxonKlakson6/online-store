import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useFetching = <RequestBody, Response>(
    callback: (userData?: RequestBody) => Promise<AxiosResponse<Response>>,
    isLoadOnMount: boolean = true
) => {
    const [data, setData] = useState<Response | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [requestError, setRequestError] = useState<any>(null);

    const makeRequest = async (requestBody?: RequestBody): Promise<void> => {
        setLoading(true);
        try {
            const response = await callback(requestBody);
            setRequestError(null);

            setData(response.data);
        } catch (error) {
            setData(null);
            setRequestError(error);
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
