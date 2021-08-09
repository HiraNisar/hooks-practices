import React, { useState } from "react";
const BasicForm=()=>{
const[email,setEmail]=useState();
const[password,setPassword]=useState();


const[allArray,setAllArary]=useState([]);

// const ChangeEvent=()=>{
    
// }

const SubmitForm=(e)=>{
e.preventDefault();
const newArray={email:email, password:password};
setAllArary([...allArray,newArray]);


setEmail("");
setPassword("");
}


    return(
<>
<form onSubmit={SubmitForm}>


<div>
<label htmlFor="email">Email</label>
<input type="text"  name="email" id="email" autoComplete="off" value={email} 
onChange={(e)=>setEmail(e.target.value)}/>
</div>


<div>
<label htmlFor="password">Password</label>
<input type="password"  name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>


<button type="submit">LOGIN</button>
</form>


<div>
   { allArray.map((curElement)=>{
    return(
        <div>
            <p>{curElement.email}</p>
            <p>{curElement.password}</p>
            </div>
    )
    })

}
</div>
</>
    );
};
export default BasicForm;