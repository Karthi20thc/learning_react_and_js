import React, { useContext, useEffect, useState } from "react";
import SimpleInput from "../../antUI/simpleInput/SimpleInput";
import { InputContext } from "../../fidonews";
import SimpleSelect from "../../antUI/select/Simple_Select";
import SimpleDatePicker from "../../antUI/DateElement/Date_Picker";
import { PlusOutlined, MinusOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button, Card, message } from "antd";
import { eventTypeOptions } from "./dropdownoptions";
import Cookies from "js-cookie";
import axios from "axios";

const InputStyle = {
    backgroundColor: "#f1f4f9",
    padding: "5.2px 6.4px 5.2px 10px",
};

const FAmountOutstanding_history = [{
    "EventAnnouncementDate": null,
    "EventEffectiveDate": null,
    "DeltaValue": null,
    "EventType": null,
    "AmountOutstanding": null,
    "Currency": null,
    "Issue_Redemption_Price": null,
    "Issue_Redemption_Yield": null,
    "AmountFactor": null,
    "Last_Change_Type": null,
    "LastChangeDate": null
}]

const AmountOutstandingContainer = ({
    fidoMasterDict,
    index,
    onAdd,
    onDelete,
    canDelete,
    inputs,
    setInputs,
    sql_row_index,
    each_data_obj
}) => {


    const simple_Input_handleChange = (e, field, regex) => {
        const { value } = e.target; // Get the value from the input field


        setInputs((prevInputs) => {
            const list = [...prevInputs.FAmountOutstanding_history]; // Clone the array to avoid mutating state directly

            // Validate using regex if provided
            if (!value || !regex || regex.test(value)) {
                // If no regex is provided or value matches the regex, update the state
                list[index][field] = value;
                return { ...prevInputs, FAmountOutstanding_history: list };
            }

            // If the regex validation fails, show a warning message
            message.warning(`You have entered an Invalid Input: ${value}`);
            return prevInputs; // Return the previous state without making changes
        });
    };

    const handle_Date_Picker_change = (date, dateString, field) => {
        const list = [...inputs.FAmountOutstanding_history];

        list[index][field] = date
            ? date.format("YYYY-MM-DD")
            : null;

        setInputs(prev => ({
            ...prev,
            FAmountOutstanding_history: list
        }));
    };



    const simple_select_handleChange = (value, field) => {
        const list = [...inputs.FAmountOutstanding_history];
        // const { value } = e.target;
        // console.log("simple_select_handleChange", value);

        list[index][field] = value;
        setInputs((values) => ({ ...values, FAmountOutstanding_history: list }));
    };

    const viewData = () => {

    }
    return (
        <Card className="col-lg-12 mb-1" style={{ zoom: "100%", borderRadius: "0.5px solid blue" }}>
            <div className="row">

                {/* Header with actions */}
                <div className="col-lg-12 d-flex justify-content-between align-items-center mb-4" >
                    {/* <strong style={{ fontSize: "10px" }}>Record -{index + 1}</strong> */}
                    <strong style={{ fontSize: "10px" }}>ISINID - {inputs?.ISINID}</strong>
                    <strong style={{ fontSize: "10px" }}>app_type - {each_data_obj?.msg_id}</strong>
                    <strong style={{ fontSize: "10px" }}>cats_amount_issued - {each_data_obj?.cats_amount_issued}</strong>
                    <strong style={{ fontSize: "10px" }}>fe1_amtredeem - {each_data_obj?.fe1_amtredeem}</strong>
                    {/* <strong>RowID - {sql_row_index ? sql_row_index : 'INSERT OPERATION'}</strong> */}

                    {/* <div>
                        <Button
                            className=" btn-primary mr-1"
                            size="small"
                            onClick={onAdd}
                        >
                            <PlusOutlined /> Add New
                        </Button>

                        {canDelete && (
                            <Button
                                className="btn-warning"
                                size="small"
                                onClick={onDelete}
                            >
                                <MinusOutlined /> Delete
                            </Button>
                        )}
                    </div> */}
                </div>

                {/* -----------Form Fields----------- */}
                <div className="col-lg-2">
                    <label className="custom-label">Announce Date</label>
                    <SimpleDatePicker size="small"
                        value={each_data_obj.EventAnnouncementDate}
                        onChange={(date, dateString) =>
                            handle_Date_Picker_change(
                                date,
                                dateString,
                                "EventAnnouncementDate"
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Effective Date</label>
                    <SimpleDatePicker size="small"
                        value={each_data_obj.EventEffectiveDate}
                        onChange={(date, dateString) =>
                            handle_Date_Picker_change(
                                date,
                                dateString,
                                "EventEffectiveDate"
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Delta Value</label>
                    <SimpleInput
                        size="small"
                        style={InputStyle}
                        placeholder={"int"}
                        value={each_data_obj.DeltaValue}
                        handleChange={(e) =>
                            simple_Input_handleChange(
                                e,
                                "DeltaValue",
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Event Type</label>
                    <SimpleSelect
                        searchable
                        options={eventTypeOptions?.map((item) => ({
                            value: parseInt(item.value),
                            label: item.label
                        }))}
                        value={parseInt(each_data_obj.EventType)}
                        handleChange={(value) =>
                            simple_select_handleChange(
                                value,
                                "EventType"
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Amount Outstanding</label>
                    <SimpleInput size="small" style={InputStyle} placeholder={"int"}
                        value={each_data_obj.AmountOutstanding}
                        handleChange={(e) =>
                            simple_Input_handleChange(
                                e,
                                "AmountOutstanding",
                            )
                        }
                    // disabled={true}
                    />
                </div>
                <div className="col-lg-2">
                    <label className="custom-label">Issue Redem.. Yield</label>
                    <SimpleInput size="small" style={InputStyle} placeholder={"int"}
                        value={each_data_obj.Issue_Redemption_Yield}
                        handleChange={(e) =>
                            simple_Input_handleChange(
                                e,
                                "Issue_Redemption_Yield",
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Currency</label>
                    <SimpleSelect
                        options={fidoMasterDict?.data?.fe_currency?.map((item) => ({
                            value: String(item.iso_code),
                            label: `${item.iso_code} - ${item.currency}`
                        }))}
                        placeholder={"VARCHAR(10)"}
                        size="small"
                        value={each_data_obj.Currency}
                        handleChange={(value) =>
                            simple_select_handleChange(
                                value,
                                "Currency"
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Issue/Redem.. Price</label>
                    <SimpleInput size="small" style={InputStyle} placeholder={"float"}
                        value={each_data_obj.Issue_Redemption_Price}
                        handleChange={(e) =>
                            simple_Input_handleChange(
                                e,
                                "Issue_Redemption_Price",
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Amount Factor</label>
                    <SimpleInput size="small" style={InputStyle} placeholder={"int"}
                        value={each_data_obj.AmountFactor}
                        handleChange={(e) =>
                            simple_Input_handleChange(
                                e,
                                "AmountFactor",
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Last Change Type</label>
                    <SimpleInput size="small" style={InputStyle} placeholder={"VARCHAR(10)"}
                        value={each_data_obj.Last_Change_Type}
                        handleChange={(e) =>
                            simple_Input_handleChange(
                                e,
                                "Last_Change_Type",
                            )
                        }
                    // disabled={true}
                    />
                </div>

                <div className="col-lg-2">
                    <label className="custom-label">Last Change Date</label>
                    <SimpleDatePicker size="small"
                        value={each_data_obj.LastChangeDate}
                        onChange={(date, dateString) =>
                            handle_Date_Picker_change(
                                date,
                                dateString,
                                "LastChangeDate"
                            )
                        }
                    // disabled={true}
                    />
                </div>
            </div>
        </Card>
    );
};




const Example = () => {
    const { inputs, setInputs, fidoMasterDict } = useContext(InputContext);
    const [amountOutstandingHistory, setAmountOutstandingHistory] = useState([]);
    const [isamountOutstandingLoading, setIsamountOutstandingLoading] = useState(false);


    const handleAddContainer = () => {
        setInputs((values) => ({
            ...values,
            FAmountOutstanding_history: [
                ...inputs.FAmountOutstanding_history,
                {
                    "EventAnnouncementDate": null,
                    "EventEffectiveDate": null,
                    "DeltaValue": null,
                    "EventType": null,
                    "AmountOutstanding": null,
                    "Currency": null,
                    "Issue_Redemption_Price": null,
                    "Issue_Redemption_Yield": null,
                    "AmountFactor": null,
                    "Last_Change_Type": null,
                    "LastChangeDate": null
                }
            ],

        }));
    };

    const handleDeleteContainer = (index) => {
        setInputs((values) => {
            // Remove the item at the given index
            const updatedOptions = values.FAmountOutstanding_history.filter((_, i) => i !== index);

            // Recalculate ca_option_number for all remaining items
            // const reorderedOptions = updatedOptions.map((item, i) => ({
            //     ...item,
            //     ca_option_number: (i + 1).toString().padStart(3, "0"),
            // }));

            // Update the state with reordered array
            return { ...values, FAmountOutstanding_history: updatedOptions };
        });
    };

    useEffect(() => {
        const getAmountOutstandingHistory = async (isin_id) => {
            setIsamountOutstandingLoading(true)
            try {
                const payload = {
                    "isinid": isin_id
                };

                const res = await axios.post("/api/fido/get_amountOutstanding_history", payload, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": Cookies.get("csrftoken")
                    }
                });

                if (res.status === 200) {
                    message.success({
                        content: "get_amountOutstanding_history Route success",
                        duration: 5,
                    });
                }

                const apiRows = res.data?.data || [];
                // setAmountOutstandingHistory(apiRows)
                setInputs((prev) => {
                    return {
                        ...prev,
                        FAmountOutstanding_history: apiRows
                    }
                })
            }
            catch (err) {
                console.log(err)
                message.error({
                    content: err.response.data.message,
                    duration: 5,
                });
            }
            finally {
                setIsamountOutstandingLoading(false)
            }
        }
        if (inputs?.ISINID) {
            getAmountOutstandingHistory(inputs?.ISINID)
        }

    }, [inputs?.ISINID])

    return (
        <>
            <div className="col-lg-12"
            >
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="card-header bg-custom p-1 mb-1"
                            style={{ backgroundColor: "#0845b4" }}
                        >
                            <label
                                className="custom-label"
                                style={{ color: "white", display: "flex", justifyContent: "space-between" }}
                            >
                                Amount Outstanding
                                {/* <span>Total Records -{inputs.FAmountOutstanding_history?.length}</span> */}
                            </label>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        height: "70vh",
                        overflowY: "scroll",
                    }}>
                    {isamountOutstandingLoading ? (
                        <div>"Loading"</div>) : (
                        inputs.FAmountOutstanding_history?.map((e, index) => (
                            <AmountOutstandingContainer
                                key={index}
                                index={index}
                                fidoMasterDict={fidoMasterDict}
                                onAdd={handleAddContainer}
                                onDelete={() => handleDeleteContainer(index)}
                                canDelete={index !== 0}
                                inputs={inputs}
                                setInputs={setInputs}
                                sql_row_index={e.ID}
                                each_data_obj={e}
                            />
                        ))
                    )}

                </div>

            </div>
        </>
    );
};



export default Example;
