import React, { useState, useRef } from "react";

const DebounceInput = () => {

    const [value, setValue] = useState("");
    const timerRef = useRef(null);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        // clear previous timer
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // start new timer
        timerRef.current = setTimeout(() => {
            console.log("API Call:", newValue);
        }, 500);
    };

    return (
        <div>
            <h3>Debounce Search</h3>

            <input
                type="text"
                placeholder="Search..."
                value={value}
                onChange={handleChange}
            />

        </div>
    );
};

export default DebounceInput;