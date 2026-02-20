import axios from "axios";
import React, { useEffect, useState } from "react";

const JsonPlaceholder = () => {
    const [apiresult, setApiresult] = useState([]);
    useEffect(() => {
        const getJson = async () => {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            // console.log(result);

            if (result) {
                setApiresult(result?.data);
            }
        };

        try {
            getJson();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <React.Fragment>
            {apiresult?.map((ele, index) => {
                return (
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div>Title - {ele.title}</div>
                        <div>
                            status - {ele.completed === true ? "Completed" : "Incomplete"}
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default JsonPlaceholder;
