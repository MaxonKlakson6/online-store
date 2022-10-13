import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

type usePaginationReturn = [
    page: number,
    handleChangePage: (event: ChangeEvent<unknown>, page: number) => void
];

export const usePagination = (initialPage = 1): usePaginationReturn => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
        setSearchParams({ page: String(page) });
    };

    useEffect(() => {
        setSearchParams({ page: String(initialPage) });
    }, []);

    useEffect(() => {
        if (searchParams.get('page') === null) {
            setSearchParams({ page: String(1) });
        }
    }, [searchParams]);

    return [Number(searchParams.get('page')), handleChangePage];
};
