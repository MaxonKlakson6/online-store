import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
// This file just for try something that I don't correctly understand
const TestContainer = () => {
    const toastId = React.useRef<any>(null);

    const update = () =>
        toast.update(toastId.current, {
            type: toast.TYPE.INFO,
            autoClose: 5000,
        });

    return (
        <>
            <ToastContainer />
            <div>
                <button type="button" onClick={update}>
                    Update
                </button>
            </div>
        </>
    );
};

export default TestContainer;
