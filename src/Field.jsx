export default function Field({ value, infoField, handleChange }) {
  // state
  // get main value from object
    const required = infoField.required ?? false;
    const label = infoField.label || "";
    const type = infoField.type;
    const name = infoField.name;
    const options = infoField.options ;
    const buttonValue = infoField.value || "";
    console.log(value);
    // options list
    let listOfOption;
    if (type == "select" && options != null) {
        listOfOption = options.map((option) => {
        return <option key={option.id}> {option.value}</option>;
        });
    }
    let inputElement;

    if (type == "select") {
        inputElement = (
        <select value={value} name={name} onChange={handleChange}>
            {listOfOption}
        </select>
        );
    } else if (type == "checkbox" || type == "radio") {
        inputElement = options.map((option) => {
        return (
            <div key={option.id} className="content">
            <input
                required={required}
                onChange={handleChange}
                type={type}
                value={option.value}
                name={name}
            />
            <label>{option.label}</label>
            </div>
        );
        });
    } else if (type == "submit" || type == "button" || type == "reset") {
        inputElement = <input name={name} type={type} value={buttonValue} />;
    } else {
        inputElement = (
        <input
            value={value}
            required={required}
            name={name}
            onChange={handleChange}
            type={type}
            placeholder={label}
        />
        );
    }
    return (
        <>
        {label != "" ? <label>{label}</label> : <></>}
        {inputElement}
        </>
    );
}
