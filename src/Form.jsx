import Field from './Field';
import { useState } from 'react';
import './style.css';
import avatarImg from './images/avatar.jpg'
export default function Form(){
    /* config rule
    what must have Depending on
    text,email,number,phone,password... => {id , type , label ,name , required (Optional)}
    radio,checkbox=> {id , type , label ,name , options,required (Optional)}
    select=> {id , type , label  ,name , options,required (Optional)}
    any bottom like submit , reset=>{id,type,value}
    */
    
    // config
    const configInputs = [
        {
            "id":1,
            "type":"text",
            "label":"name",
            "name":"name",
            "required":true
        },
        {
            "id":6,
            "type":"email",
            "label":"email",
            "name":"email"
        },
        {
            "id":2,
            "type":"password",
            "label":"Password",
            "name":"password"
        },
        {
            "id":55,
            "name":"gender",
            "type":"radio",
            "options":[
                {
                    "id":1,
                    "label":"male",
                    "value":"male"
                },
                {
                    "id":2,
                    "label":"female",
                    "value":"female"
                }
            ]
        },
        {
            "id":8,
            "name":"age",
            "label":"choose Your gender",
            "type":"select",
            "options":[
                {
                    "id":1,
                    "value":"more 15"
                },
                {
                    "id":2,
                    "value":"less 15"
                }
            ]
        },{
            "id":56,
            "type":"submit",
            "value":"Send"
        }
    ];
    // state for form
    const [formValue,setFormValue]=useState({});

    function handleChange(event){
        const {name,value} = event.target;
        setFormValue({...formValue, [name] : value});
    }
    //list of input
    const ListOfInputs = configInputs.map((feild)=>{
        return <Field key={feild.id} infoField={feild} handleChange={handleChange}  />
    })
    return <>
        <img className='avatar' src={avatarImg} alt="avatar" />
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <h1>LOGIN</h1>
            {ListOfInputs}
        </form>
    </>
}