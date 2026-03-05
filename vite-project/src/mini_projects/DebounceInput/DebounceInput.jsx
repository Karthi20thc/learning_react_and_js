import React, { useState, useEffect } from "react";

const DebounceInput = () => {

    const [value, setValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, 500); // debounce time

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    useEffect(() => {
        if (debouncedValue) {
            console.log("API Call with:", debouncedValue);
        }
    }, [debouncedValue]);

    return (
        <div>
            <h3>Debounce Input</h3>

            <input
                type="text"
                placeholder="Type something..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

        </div>
    );
};

export default DebounceInput;