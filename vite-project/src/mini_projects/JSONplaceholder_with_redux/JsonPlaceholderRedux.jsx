import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../features/JSONplaceholderSlice";

const JsonPlaceholderRedux = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.todo);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>Error: {error}</h3>;

    return (
        <React.Fragment>
            {list?.map((ele, i) => {
                return (
                    <div key={i} style={{ display: "flex", gap: "10px" }}>
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

export default JsonPlaceholderRedux;
