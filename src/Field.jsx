import { useState } from "react";
export default function Field({ infoField , handleChange }) {
    // state
    const[wrongInput,setWrongInput]=useState(false)
    // get main value from object
    const required =infoField.required ?? false;
    const label=infoField.label ?? "none";
    const type = infoField.type;
    const name=infoField.name;
    const options = infoField.options;
    const value =infoField.value;

    // options list
    let listOfOption;
    if (type == "select"  && options != null) {
        listOfOption = options.map((option) => {
        return <option key={option.id}> {option.value}</option>;
        });
    }else if((type=="radio"|| type=="checkbox") && options!=null){
        listOfOption =options.map((option)=>{
            return<div key={option.id} className="content">
                <input  required={required }  onChange={handleChange} type={type} value={option.value} name={name} />
                <label>{option.label}</label>
            </div>
        })
    }
    //function for test data in real time
        function testDataInput(event){
        const {value,type} = event.target;
        let regex;
        switch(type){
            case "text": regex=(/^([a-zA-Z\s]{3,30})?$/); break;
            case "email": regex=/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/; break;
            case "passsword": regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; break;
            case "url": regex=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/; break;
            case "phone": 
            regex= /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; break;
            case "tel":
            regex=/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; break;
            default: 
            regex =/.*/;
        }
        if(!regex.test(value)){
            setWrongInput(true)
        }
        else{
            setWrongInput(false)
        }
    }

    // return input condition 
        if (type == "select" ) {
        return <> 
                <label >{label} :</label>
                <select name={name} onChange={handleChange}>{listOfOption}</select>
            </>
        }else if(type == "checkbox" || type=="radio"){
            return <div className="list">
                {listOfOption}
            </div>   
            }
        else if(type=="submit" || type=="reset"){
            return <input  name={name}  type={type} value={value}/>
        }
        else{
            return <>
                {wrongInput? <div className="wrong">Incorrect Input</div>:<></>}
                <label >{label} :</label>
                <input required={required} onBlur={testDataInput} name={name}  onChange={handleChange} type={type} placeholder={label} />
            </>  
        }
        
}
