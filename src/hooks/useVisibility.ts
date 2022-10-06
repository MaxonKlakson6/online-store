import { useState, MouseEvent } from 'react';

export const useVisibility = <InitialState>(initialState: InitialState) => {
    const [visibility, setVisibility] = useState<InitialState>(initialState);

    const handleChangeVisibility = (
        event: MouseEvent,
        name: keyof InitialState
    ): void => {
        setVisibility((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return { visibility, handleChangeVisibility };
};
