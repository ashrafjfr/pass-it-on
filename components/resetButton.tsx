import React, { useEffect, useState } from "react";

export default function ResetButton({handleResetButtonClick, updateData} : 
    {handleResetButtonClick:any, updateData:any}) {

    // Ensures hook's state is updated before calling updateData()
    const [reset, setReset] = useState(false);
    useEffect(() => {
        if (reset) {
            updateData();
            setReset(false);
        }
    }, [reset]);

    return (
        <button 
            id="reset-button"
            className="bg-neutral-300 hover:bg-neutral-400 text-neutral-500 font-semibold py-2 px-4 rounded-full ml-3 h-10"
            onClick={() => {
                handleResetButtonClick();
                setReset(true);
            }}>
            Reset
        </button>
    )
}